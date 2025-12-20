import ContactForm from "../widgets/contact-form";
import LeftContactSide from "../widgets/left-contact";

export function ContactPageComponent() {
  return (
    <section className=" w-full bg-background py-16 lg:py-24 relative overflow-clip">
      <div className="absolute inset-x-0 -top-40 mx-auto aspect-square w-88 rounded-full bg-primary/10 blur-3xl lg:-top-80 lg:w-152" />
      <div className="absolute inset-x-0 top-1/3 mx-auto aspect-square w-[16rem] rounded-full bg-muted/20 blur-2xl" />

      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <LeftContactSide />

          {/* RIGHT SIDE – FORM */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
