import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "$100",
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
      name: "Pro",
      price: "$250",
      features: [
        "Key Value Proposition",
        "Key Value Proposition",
        "Key Value Proposition",
        "Key Value Proposition",
        "Key Value Proposition",
        "Key Value Proposition",
        "Key Value Proposition",
      ],
    },
    {
      name: "Premium",
      price: "$500",
      features: [
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
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Don't whisper, Shout</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <p className="text-3xl font-bold">{plan.price}</p>
                <p className="text-sm text-gray-500">One-time fee</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-green-500">
                        <Check size={16} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Buy Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
