import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="text-center py-24 px-4">
      <h1 className="text-6xl font-bold mb-20">Publish. Shout. Get Noticed.</h1>
      <p className="text-gray-700 text-xl max-w-2xl mx-auto mb-8">
        The quickest way to publish press releases, articles, books and expert
        content for maximum exposure across channels.
      </p>
      <Button
        variant="outline"
        size="sm"
        className="rounded-full border border-gray-300 mb-12"
      >
        Start your Press Release
      </Button>
    </section>
  );
}
