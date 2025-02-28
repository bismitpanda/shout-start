import { PricingCard } from "./pricing-card";

export function PricingSection() {
  const pricingPlans = [
    {
      title: "1 Press",
      price: "$100",
      description: "Best for Casual Authors",
      features: [
        "Key Value Proposition",
        "Key Value Proposition",
        "Key Value Proposition",
      ],
    },
    {
      title: "3 Press",
      price: "$250",
      description: "Best for EB-1A Aspirants",
      features: [
        "Key Value Proposition",
        "Key Value Proposition",
        "Key Value Proposition",
        "Key Value Proposition",
        "Key Value Proposition",
        "Key Value Proposition",
      ],
    },
    {
      title: "5+ Press",
      price: "$500",
      description: "Best for Marketers",
      features: [
        "Key Value Proposition",
        "Key Value Proposition",
        "Key Value Proposition",
        "Key Value Proposition",
        "Key Value Proposition",
        "Key Value Proposition",
        "Key Value Proposition",
        "Key Value Proposition",
      ],
    },
  ];

  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Don't whisper, Shout
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            description={plan.description}
            features={plan.features}
          />
        ))}
      </div>
    </section>
  );
}
