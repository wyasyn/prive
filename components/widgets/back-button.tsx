"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();
  return (
    <Button
      variant={"ghost"}
      size={"icon-lg"}
      onClick={() => router.back()}
      aria-label="Back"
    >
      <ChevronLeft className=" h-6 w-6" />
    </Button>
  );
}
