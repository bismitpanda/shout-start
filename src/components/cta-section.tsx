import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-32 px-4 text-center bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold mb-6">Publish your story today.</h2>

        <Button className="rounded-full p-5 group mt-4">
          Book a Free Consultation{" "}
          <ChevronRight className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
