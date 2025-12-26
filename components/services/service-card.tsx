import { Service } from "@/types";
import { Code, Code2 } from "lucide-react";
import Image from "next/image";

interface Props {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}

const ServiceCard = ({ service, isActive, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-3xl bg-card  cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? "flex-2" : "flex-[0.7]"}
        h-100 group
      `}
    >
      {/* Background overlay for inactive cards */}
      <div
        className={`
        absolute inset-0 backdrop-blur-[2px]
        transition-opacity duration-500
        ${isActive ? "opacity-0" : "opacity-100"}
      `}
      />

      {/* Content Container */}
      <div className="relative h-full flex">
        {/* Left side - Text content */}
        <div
          className={`
          flex flex-col justify-between p-8
          transition-all duration-700
          ${isActive ? "w-1/2" : "w-full"}
        `}
        >
          {/* Icon */}
          <div
            className={`
            w-14 h-14 rounded-2xl 
            flex items-center justify-center
            transition-all duration-500
            ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-70"}
          `}
          >
            <Code className="w-6 h-6 " />
          </div>

          {/* Title and Description */}
          <div className="space-y-4 bg-secondary/30 p-4 rounded-2xl">
            <h3
              className={`
              font-semibold transition-all duration-500
              ${isActive ? "text-xl" : "text-lg opacity-70"}
            `}
            >
              {service.title}
            </h3>

            {/* Expandable content */}
            <div
              className={`
              overflow-hidden transition-all duration-700
              ${isActive ? "max-h-75 opacity-100" : "max-h-0 opacity-0"}
            `}
            >
              <p className="text-sm leading-relaxed mb-4">
                {service.shortDescription}
              </p>

              <div className="space-y-2">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="text-sm  flex items-center gap-2"
                    style={{
                      transitionDelay: `${idx * 50}ms`,
                    }}
                  >
                    <span>•</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Image area */}
        <div
          className={`
          absolute right-2 top-2 bottom-2 h-full
          transition-all duration-700 ease-in-out
          ${isActive ? "w-1/2 translate-x-0" : "w-0 translate-x-full"}
        `}
        >
          <div
            className={`
            w-full h-full
            flex items-center justify-center
            transition-opacity duration-500
            ${isActive ? "opacity-100" : "opacity-0"}
          `}
          >
            {/* Placeholder for actual image */}
            <div className="rounded-2xl  flex items-center justify-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={256}
                height={256}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
