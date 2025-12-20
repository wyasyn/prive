"use client";

import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IconSend, IconLoader2 } from "@tabler/icons-react";
import { toast } from "sonner";
import { submitContactForm } from "@/app/actions/contact";
import { cn } from "@/lib/utils";

/* ----------------------------- Schema ----------------------------- */

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name must be at most 50 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters.")
    .max(500, "Message must be at most 500 characters."),
});

type ContactFormValues = z.infer<typeof formSchema>;

type FormStatus =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

/* ----------------------------- Component ----------------------------- */

export default function ContactForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [status, setStatus] = useState<FormStatus>({ type: "idle" });
  const statusRef = useRef<HTMLDivElement | null>(null);

  /* ---- Scroll to status on change (mobile UX) ---- */
  useEffect(() => {
    if (status.type !== "idle") {
      statusRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [status]);

  /* ---- Auto-clear success message ---- */
  useEffect(() => {
    if (status.type === "success") {
      const timer = setTimeout(() => setStatus({ type: "idle" }), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  async function onSubmit(data: ContactFormValues) {
    setStatus({ type: "idle" });

    const result = await submitContactForm(data);

    if (!result.success) {
      const message = result.error ?? "Something went wrong. Please try again.";

      setStatus({ type: "error", message });

      toast.error("Submission failed", {
        description: message,
        position: "bottom-right",
      });

      return;
    }

    setStatus({
      type: "success",
      message: "Your message has been sent successfully.",
    });

    toast.success("Message sent", {
      description: "Thanks for reaching out. I’ll get back to you shortly.",
      position: "bottom-right",
    });

    reset();
  }

  return (
    <div className="rounded-xl border bg-card/60 p-8 backdrop-blur">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Honeypot field */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          placeholder="compony"
        />

        <FieldGroup>
          <FieldSet>
            <FieldLegend>Contact form</FieldLegend>
            <FieldDescription>
              Fill out the form below and I’ll respond as soon as possible.
            </FieldDescription>

            <FieldGroup className="pt-6">
              {/* NAME */}
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Input
                      {...field}
                      placeholder="Your name"
                      aria-invalid={fieldState.invalid}
                      className="py-5 bg-card/95 border border-border/60"
                    />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* EMAIL */}
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Email address"
                      aria-invalid={fieldState.invalid}
                      className="py-5 bg-card/95 border border-border/60"
                    />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* MESSAGE */}
              <Controller
                name="message"
                control={control}
                render={({ field, fieldState }) => (
                  <Field className="flex-1" data-invalid={fieldState.invalid}>
                    <Textarea
                      {...field}
                      placeholder="Tell me about your project or question..."
                      className="min-h-40 resize-none bg-card/95 border border-border/60"
                    />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </FieldSet>

          {/* SUBMIT */}
          <div className="pt-6">
            <Button
              type="submit"
              size="lg"
              className={cn("w-full gap-2", {
                "cursor-pointer": !isSubmitting,
              })}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  Sending
                  <IconLoader2 className="h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Submit
                  <IconSend className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </FieldGroup>
      </form>
      {/* Inline status message */}
      {status.type !== "idle" && (
        <div
          ref={statusRef}
          role="alert"
          className={cn(
            "rounded-lg mt-4 border p-4 text-sm grid place-items-center",
            status.type === "error"
              ? "border-red-500/30 bg-red-500/10 text-red-700"
              : "border-emerald-500/30 bg-emerald-500/10 text-emerald-700"
          )}
        >
          {status.message}
        </div>
      )}
    </div>
  );
}
