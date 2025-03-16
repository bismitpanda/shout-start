import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function FoundersSection() {
  return (
    <section className="px-6 md:px-0 py-16 bg-gradient-to-l from-purple-50 via-5% to-30% to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-80 order-2 md:order-1">
            <Image
              src="/For Startup-Founders.png"
              alt="Marketers"
              fill
              className="object-contain"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-2">For Startup-Founders</h2>
            <h3 className="text-xl font-medium mb-4">
              Build Brand Authority & SEO
            </h3>
            <p className="text-gray-600 mb-6">
              Press releases and expert content help you establish thought
              leadership, improve SEO rankings, and drive organic traffic to
              your business.
            </p>
            <Button variant="outline" className="rounded-full p-5 group">
              Get Publishing{" "}
              <ChevronRight className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
