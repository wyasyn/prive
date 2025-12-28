import { Service } from "@/types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SlideTextButton from "../kokonutui/slide-text-button";

interface Props {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}

const ServiceCard = ({ service, isActive, onClick }: Props) => {
  return (
    <div
      className="flex flex-col gap-2 bg-secondary/75 p-2 rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] group"
      onClick={onClick}
    >
      <header
        className={cn(
          "flex items-center justify-between gap-2  px-4 py-2 rounded-lg",
          isActive ? "bg-primary/10" : "bg-background"
        )}
      >
        <SlideTextButton
          text={service.title}
          variant="ghost"
          className="border-none hover:bg-transparent flex-1 p-0 justify-start"
          href={`/services/${service.slug}`}
        />
        <Link href={`/services/${service.slug}`}>
          <Button
            size={"icon-lg"}
            variant={isActive ? "default" : "secondary"}
            className={"group-hover:bg-primary/25"}
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </Link>
      </header>
      <div
        className={cn(
          "flex-1 bg-background px-4 py-5 rounded-lg flex flex-col gap-3",
          isActive ? "bg-primary/10" : "bg-background"
        )}
      >
        <p>{service.shortDescription}</p>
        <Image
          src={service.icon}
          alt={service.title}
          width={400}
          height={300}
          className="rounded-lg w-full aspect-square md:aspect-video object-cover"
        />
        <div className="mt-2 flex flex-wrap gap-2">
          {service.tools.map((tool) => (
            <Badge variant={isActive ? "secondary" : "outline"} key={tool}>
              {tool}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
