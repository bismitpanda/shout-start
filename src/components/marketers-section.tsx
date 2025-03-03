import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function MarketersSection() {
  return (
    <section className="py-16 px-4 bg-purple-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-80 order-2 md:order-1">
            <Image
              src="/marketers-illustration.png"
              alt="Marketers"
              fill
              className="object-contain"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-2">Marketers</h2>
            <h3 className="text-lg font-medium mb-4">
              Build Brand Authority & SEO
            </h3>
            <p className="text-gray-600 mb-6">
              Establish thought leadership, generate high-quality backlinks, and
              craft branded content that drives traffic to your website.
            </p>
            <Button variant="outline" className="rounded-full border-gray-300">
              Get Publishing <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
