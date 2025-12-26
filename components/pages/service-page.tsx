"use client";

import { useState } from "react";
import { SERVICES } from "@/constant/data";
import { useMediaQuery } from "usehooks-ts";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "../services/service-card";
import { Button } from "../ui/button";
import { PageHeader } from "../widgets/page-header";

export default function ServicesPage() {
  const [page, setPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const mobile = useMediaQuery("(max-width: 768px)");

  const desktop = useMediaQuery("(min-width: 1024px)");

  const PAGE_SIZE = mobile ? 1 : desktop ? 3 : 3;
  const start = page * PAGE_SIZE;
  const currentServices = SERVICES.slice(start, start + PAGE_SIZE);

  const canGoPrev = page > 0;
  const canGoNext = start + PAGE_SIZE < SERVICES.length;

  return (
    <div>
      <div className="container py-24 lg:py-32">
        {/* Header */}
        <PageHeader
          eyebrow="Services"
          title="What I do best"
          description="I help brands, founders, and creatives build strong identities, launch high-quality websites, and grow with confidence."
        />

        {/* Services Cards */}
        <div className="flex gap-4 mb-8">
          {currentServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 border border-border/60 w-fit mx-auto p-1 rounded-2xl bg-card/60">
          <Button
            type="button"
            onClick={() => {
              setPage((p) => p - 1);
              setActiveIndex(0);
            }}
            disabled={!canGoPrev}
            aria-label="Previous"
            variant={"outline"}
            size={"icon-lg"}
            className={"rounded-full"}
            title="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            onClick={() => {
              setPage((p) => p + 1);
              setActiveIndex(0);
            }}
            disabled={!canGoNext}
            size={"icon-lg"}
            aria-label="Next"
            variant={"outline"}
            className={"rounded-full"}
            title="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
