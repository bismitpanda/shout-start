import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PricingSection() {
  const plans = [
    {
      name: "1 Press",
      price: 100,
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
      name: "3 Press",
      price: 250,
      discount: { price: 175, percent: 30 },
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
      name: "5+ Press",
      price: 500,
      discount: { price: 250, percent: 50 },
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
                <p className="text-3xl font-bold">
                  $ {plan.discount ? plan.discount.price : plan.price}
                </p>
                {plan.discount && (
                  <div className="flex flex-row space-x-2 w-full justify-center items-center">
                    <del>$ {plan.price}</del>{" "}
                    <Badge className="p-2 bg-amber-300 text-black shadow-none text-md">
                      {plan.discount.percent}% off
                    </Badge>
                  </div>
                )}
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
