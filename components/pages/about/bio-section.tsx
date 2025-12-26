import { Quote } from "lucide-react";
import Image from "next/image";

const BioSection = () => {
  return (
    <section className="container  py-16 max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column - About Text */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            <span className="text-5xl font-bold float-left mr-3 font-display leading-none">
              M
            </span>
            y name is Walum Yasin, a full stack engineer with a strong
            foundation in computer science and hands-on experience building web
            and mobile applications. I design and implement frontend interfaces,
            backend APIs, and mobile solutions that are scalable, maintainable,
            and user-focused.
          </p>

          <p className="text-lg leading-relaxed">
            My work spans modern JavaScript frameworks, backend services,
            databases, and mobile development. I enjoy solving complex problems,
            translating ideas into production-ready systems, and collaborating
            with teams to ship reliable software that delivers real value.
          </p>
        </div>

        {/* Right Column - Testimonial */}
        <div className=" bg-secondary dark:bg-card/60 p-8 rounded-2xl space-y-6">
          <p className="text-lg leading-relaxed italic">
            <Quote className="w-7 h-7 stroke-1 mb-1" />
            Working with Yasin was a highly professional experience. He
            communicated clearly, understood requirements quickly, and delivered
            well-structured, reliable solutions. His ability to handle both
            frontend and backend development made the entire process efficient
            and seamless.
          </p>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-muted-foreground/20 overflow-hidden">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D03AQEGkMfrzfy_3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726772334246?e=1768435200&v=beta&t=btDA552JGOKN5u_vxxaHOkMZv8b9oAMiPDqAclKsVW0"
                alt="Taylor Morgan"
                className="w-full h-full object-cover"
                width={48}
                height={48}
              />
            </div>
            <div>
              <p className="font-semibold">CPA Fredricks Owora </p>
              <p className="text-sm text-muted-foreground">
                Certified Public Accountant
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
