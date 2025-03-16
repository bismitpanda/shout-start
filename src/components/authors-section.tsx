import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function AuthorsSection() {
  return (
    <section className="px-6 md:px-0 py-16 border-t border-gray-200 bg-gradient-to-r from-red-50 via-5% to-30% to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-2">For Authors</h2>
            <h3 className="text-xl font-medium mb-4">Showcase your Work</h3>
            <p className="text-gray-600 mb-6">
              Whether you're a journalist, thought leader, or independent
              writer, publishing with ShoutStart helps you reach a wider
              audience, build credibility, and establish your voice in your
              industry.
            </p>
            <Button variant="outline" className="rounded-full p-5 group">
              Get Publishing{" "}
              <ChevronRight className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="relative h-64 md:h-80">
            <Image
              src="/For Authors.png"
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
