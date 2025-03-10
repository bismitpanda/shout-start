import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="text-center py-24 px-4">
      <h1 className="text-6xl font-bold mb-20">Publish. Shout. Get Noticed.</h1>
      <p className="text-gray-700 text-xl max-w-2xl mx-auto mb-8">
        The quickest way to publish press releases, articles, books and expert
        content for maximum exposure across channels.
      </p>
      <Button className="rounded-full border border-gray-300 mb-12 group gap-1 p-5">
        Book a free consultation{" "}
        <ChevronRight className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
      </Button>
    </section>
  );
}
