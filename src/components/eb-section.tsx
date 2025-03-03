import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function EBSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">EB-1A Aspirants</h2>
            <h3 className="text-lg font-medium mb-4">
              Strengthen Your Public Recognition
            </h3>
            <p className="text-gray-600 mb-6">
              Get published in renowned publications to bolster your
              extraordinary ability application. Our experienced team has helped
              hundreds of immigrants establish their public recognition.
            </p>
            <Button variant="outline" className="rounded-full border-gray-300">
              Get Publishing <ArrowRight />
            </Button>
          </div>
          <div className="relative h-64 md:h-80">
            <Image
              src="/eb-illustration.png"
              alt="EB-1A"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
