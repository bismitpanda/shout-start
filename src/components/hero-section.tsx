import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Marquee } from "./magicui/marquee";

export function HeroSection() {
  return (
    <section className="text-center py-24 px-4">
      <h1 className="text-6xl font-bold mb-8">Publish. Shout. Get Noticed.</h1>
      <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
        The quickest way to publish press releases, articles, books and expert
        content for maximum exposure across channels.
      </p>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-5">
        <Marquee pauseOnHover>
          {Array(6)
            .fill(undefined)
            .map((_, i) => (
              <div className="h-[81px] w-max">
                <img
                  className="h-[81px] w-auto"
                  key={i}
                  src={`/logos/Logo Top ${i + 1}.png`}
                  alt="Logo"
                />
              </div>
            ))}
        </Marquee>
      </div>
      <Button className="rounded-full mb-10 group gap-1 p-6">
        <span className="px-2">Book a Free Consultation</span>
        <ChevronRight className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
      </Button>
    </section>
  );
}
