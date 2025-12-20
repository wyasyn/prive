import { IconBrandWhatsapp, IconLocation, IconMail } from "@tabler/icons-react";
import EmailCard from "../widgets/email-card";

const contactInfo = [
  {
    name: "Email",
    value: process.env.NEXT_PUBLIC_EMAIL!,
    icon: <IconMail />,
    type: "email",
  },
  {
    name: "WhatsApp",
    value: process.env.NEXT_PUBLIC_WHATSAPP!,
    icon: <IconBrandWhatsapp />,
    type: "whatsapp",
  },
  {
    name: "Location",
    value: process.env.NEXT_PUBLIC_LOCATION!,
    icon: <IconLocation />,
    type: "location",
  },
] as const;

export default function LeftContactSide() {
  return (
    <div className="flex h-full flex-col justify-between gap-4 p-8">
      {/* TOP CONTENT */}
      <div className="space-y-6">
        <span className="inline-flex w-fit rounded-full border px-3 py-1 text-xs">
          Contact
        </span>

        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            Get in touch
          </h1>
          <p className="text-sm text-muted-foreground">
            Have a project in mind or need help building intelligent software
            solutions?
          </p>
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="space-y-4">
        {contactInfo.map((info) => (
          <EmailCard key={info.name} {...info} />
        ))}
      </div>
    </div>
  );
}
