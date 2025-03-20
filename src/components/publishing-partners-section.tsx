"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export function PublishingPartners() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const logos = Array(23)
    .fill(undefined)
    .map((_, i) => ({
      id: i,
      src: `/logos/Logo Box-${i + 1}.png`,
    }));

  const visibleLogos = isMobile && !showAll ? logos.slice(0, 6) : logos;

  return (
    <section className="py-12 px-4 md:px-10 w-full relative">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Our Publishing Partners
      </h2>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-2 md:px-32">
        {visibleLogos.map((logo) => (
          <Image
            key={logo.id}
            src={logo.src}
            width={300}
            height={100}
            alt="Publishing Partner Logo"
          />
        ))}
      </div>

      {isMobile && !showAll && logos.length > 6 && (
        <div className="absolute bottom-30 left-0 right-0 h-96 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      )}

      {isMobile && logos.length > 6 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 transition-colors rounded-full border border-black text-[14px] tracking-[4px]"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
}
