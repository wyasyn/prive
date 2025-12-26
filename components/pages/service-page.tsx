"use client";

import { useState } from "react";
import { SERVICES } from "@/constant/data";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "../services/service-card";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ServicesPage() {
  const [page, setPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const PAGE_SIZE = 3;
  const start = page * PAGE_SIZE;
  const currentServices = SERVICES.slice(start, start + PAGE_SIZE);

  const canGoPrev = page > 0;
  const canGoNext = start + PAGE_SIZE < SERVICES.length;

  return (
    <div>
      <div className="container py-24 lg:py-32">
        {/* Header */}
        <div className="mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide text-sm">
            SERVICES
          </p>
          <div className="flex items-start justify-between">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold mb-4">What we do best</h1>
              <p>
                We help studios and creatives build brands, launch websites, and
                grow with confidence.
              </p>
            </div>
            <Link href={"/contact"}>
              <Button
                variant={"secondary"}
                className="py-3  items-center gap-2"
              >
                Let&apos;s Talk
                <span className="w-2 h-2 bg-primary rounded-full"></span>
              </Button>
            </Link>
          </div>
        </div>

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
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => {
              setPage((p) => p - 1);
              setActiveIndex(0);
            }}
            disabled={!canGoPrev}
            className="flex items-center gap-2 px-6 py-3 rounded-full border-2  
                     disabled:opacity-40 disabled:cursor-not-allowed
                      transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="font-medium">Previous</span>
          </button>

          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(SERVICES.length / PAGE_SIZE) }).map(
              (_, idx) => (
                <button
                  type="button"
                  aria-label=" more services "
                  key={idx}
                  onClick={() => {
                    setPage(idx);
                    setActiveIndex(0);
                  }}
                  className={`
                  w-2 h-2 rounded-full transition-all
                  ${page === idx ? "bg-black w-8" : "bg-gray-300"}
                `}
                />
              )
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              setPage((p) => p + 1);
              setActiveIndex(0);
            }}
            disabled={!canGoNext}
            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 
                     disabled:opacity-40 disabled:cursor-not-allowed
                      transition-all"
          >
            <span className="font-medium">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
