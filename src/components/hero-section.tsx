import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Marquee } from "./magicui/marquee";
import Image from "next/image";
import { useId } from "react";

export function HeroSection() {
  const logos = [
    ["/logos/CEOWORLD Magazine.png", "CEOWORLD Magazine"],
    ["/logos/DetroitMetroTimes.png", "DetroitMetroTimes"],
    ["/logos/Forbes.png", "Forbes"],
    ["/logos/GlobalBanking&FinanceReview.png", "GlobalBanking&FinanceReview"],
    ["/logos/HackerNoon.png", "HackerNoon"],
    ["/logos/InquirerNet.png", "InquirerNet"],
    ["/logos/InternationalBusinessTimes.png", "InternationalBusinessTimes"],
    ["/logos/LAWEEKLY.png", "LAWEEKLY"],
    ["/logos/MetaPress.png", "MetaPress"],
    ["/logos/PressConnects.png", "PressConnects"],
    ["/logos/StreetInsidersCom.png", "StreetInsidersCom"],
    ["/logos/TechTimes.png", "TechTimes"],
    ["/logos/theJerusalemPost.png", "theJerusalemPost"],
    ["/logos/theVillageVoice.png", "theVillageVoice"],
    ["/logos/TheWashingtonTimes.png", "TheWashingtonTimes"],
  ] as const;

  return (
    <section className="text-center py-24 px-4">
      <h1 className="text-6xl font-bold mb-20">Publish. Shout. Get Noticed.</h1>
      <p className="text-gray-700 text-xl max-w-2xl mx-auto mb-8">
        The quickest way to publish press releases, articles, books and expert
        content for maximum exposure across channels.
      </p>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-5">
        <Marquee pauseOnHover>
          {logos.map(([logo, alt]) => (
            <div className="h-[81px] w-full">
              <img key={alt} src={logo} alt={alt} />
            </div>
          ))}
        </Marquee>
      </div>
      <Button className="rounded-full mb-10 group gap-1 p-6">
        Book a free consultation{" "}
        <ChevronRight className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
      </Button>
    </section>
  );
}
