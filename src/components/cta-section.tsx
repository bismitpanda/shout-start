import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-red-600 text-white py-12 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Publish your story today.</h2>
        <Button className="bg-white text-red-600 hover:bg-gray-100">
          Get in Touch
        </Button>
      </div>
    </section>
  );
}
