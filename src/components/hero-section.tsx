import { Button } from "@/components/ui/button";

export function HeroSection() {
  const publishers = [
    "USA TODAY",
    "Entrepreneur",
    "MAXIM",
    "Inc.",
    "Life Style",
    "USA TODAY",
  ];

  return (
    <section className="py-16 text-center container mx-auto px-4">
      <h1 className="text-5xl font-bold mb-4">Publish. Shout. Get Noticed.</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        The quickest way to publish press releases, articles, and expert content
        for maximum exposure across channels.
      </p>

      <div className="flex flex-wrap justify-center gap-4 my-6">
        {publishers.map((publisher, index) => (
          <span key={index} className="text-sm font-medium">
            {publisher}
          </span>
        ))}
      </div>

      <Button className="mt-4">Get Your Press Release</Button>
    </section>
  );
}
