import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function AuthorsSection() {
  return (
    <section className="py-16 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Authors & Casual Writers
            </h2>
            <h3 className="text-lg font-medium mb-4">Showcase your Work</h3>
            <p className="text-gray-600 mb-6">
              Whether you're a professional author or casual writer, our
              platform helps you reach a wider audience and build your personal
              brand with our extensive distribution network.
            </p>
            <Button variant="outline" className="rounded-full border-gray-300">
              Get Publishing <ArrowRight />
            </Button>
          </div>
          <div className="relative h-64 md:h-80">
            <Image
              src="/author-illustrations.png"
              alt="Authors & Writers"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
