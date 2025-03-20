import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function TalentVisaSection() {
  return (
    <section className="px-12 md:px-24 py-16 bg-gradient-to-r from-green-50 via-5% to-30% to-white">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              For Talent Visa Aspirants
            </h2>
            <h3 className="text-xl font-medium mb-4">
              Strengthen Your Public Recognition
            </h3>
            <p className="text-gray-600 mb-6">
              For O-1, EB-1, EB-2, etc., visa applicants, published work is a
              key factor in proving your extraordinary ability. A well-placed
              press release can enhance your public recognition and strengthen
              your case.
            </p>
            <Button variant="outline" className="rounded-full p-5 group">
              Get Publishing{" "}
              <ChevronRight className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="relative h-64 md:h-80">
            <Image
              src="/For Talent Visa Aspirants.png"
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
