"use client";

import { ReactElement } from "react";
import { Button } from "../ui/button";
import { IconExternalLink } from "@tabler/icons-react";
import { ContactType } from "@/types";
import { formatPhoneNumber } from "@/lib/utils";

interface ContactCardProps {
  name: string;
  value: string;
  icon: ReactElement;
  type: ContactType;
}

export default function ContactCard({
  name,
  value,
  icon,
  type,
}: ContactCardProps) {
  const handleAction = () => {
    let url = "";

    switch (type) {
      case "email":
        url = `mailto:${value}`;
        break;

      case "whatsapp":
        url = `https://wa.me/${value}`;
        break;

      case "location":
        url = process.env.NEXT_PUBLIC_LOCATION_MAP!;
        break;

      default:
        return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const displayValue = type === "whatsapp" ? formatPhoneNumber(value) : value;

  return (
    <div className="bg-card/60 backdrop-blur-sm rounded-lg border border-border/60 p-4 flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="border p-2 rounded-lg text-muted-foreground">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{displayValue}</p>
        </div>
      </div>

      <Button
        variant="secondary"
        size="icon-lg"
        className="rounded-full"
        onClick={handleAction}
      >
        <IconExternalLink />
      </Button>
    </div>
  );
}
