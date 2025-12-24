import { Quote } from "lucide-react";
import Image from "next/image";

const BioSection = () => {
  return (
    <section className="container  py-16 max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column - About Text */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            <span className="text-5xl font-bold float-left mr-3 leading-none">
              M
            </span>
            y name is August Renner — a photographer drawn to quiet moments,
            clean composition, and the kind of images that leave room to feel
            something. I shoot portraits, fashion, and commercial work with a
            focus on light, mood, and story.
          </p>
          <p className="text-lg leading-relaxed">
            My approach is simple: create thoughtful images that feel honest,
            intentional, and lasting. Whether it&apos;s a personal project or a
            brand campaign, I aim to deliver work that doesn&apos;t just look
            good — it holds attention. And I&apos;d love to create something
            meaningful with you next.
          </p>
        </div>

        {/* Right Column - Testimonial */}
        <div className=" bg-secondary dark:bg-card/60 p-8 rounded-2xl space-y-6">
          <p className="text-lg leading-relaxed italic">
            <Quote className=" w-7 h-7 stroke-1 mb-1  " />
            Working with August was one of the smoothest creative collaborations
            we&apos;ve had. He brought clarity to the concept, calm to the
            process, and a sharp eye to every detail. The final images were more
            than we hoped for — refined, natural, and totally aligned with our
            brand. We&apos;ll absolutely be working with him again.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-muted-foreground/20 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dkdteb9m5/image/upload/v1766089215/my-uploads/qnvvybz8bphei5jrmhiz.webp"
                alt="Taylor Morgan"
                className="w-full h-full object-cover"
                width={48}
                height={48}
              />
            </div>
            <div>
              <p className="font-semibold">Taylor Morgan</p>
              <p className="text-sm text-muted-foreground">
                Field & Form Studio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
