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
      name: "3 Press",
      price: 1800,
      features: [
        "Strategic placement in 3 major publications",
        "Professional press release writing",
        "SEO optimization for maximum visibility",
        "Author articles with the reporter's name ",
        "Lifetime availability of press",
      ],
    },
    {
      name: "5 Press",
      price: 4000,
      discount: { price: 3000, percent: 30 },
      features: [
        "Coverage in 5 major publications",
        "Professional press release writing",
        "SEO optimization for maximum visibility",
        "Enhanced brand positioning",
        "Dedicated writer assistance",
      ],
    },
    {
      name: "Customized Plan",
      price: 9000,
      discount: { price: 4500, percent: 50 },
      features: [
        "Choose your outlets including Forbes",
        "Professional press release writing",
        "SEO optimization for maximum visibility",
        "Media contact management",
        "Enhanced brand positioning",
        "Crisis management support",
        "Dedicated PR specialist",
        "Priority support",
      ],
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Don't whisper, Shout</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="border border-gray-200 shadow-sm h-max"
            >
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
                <ul className="space-y-6 mt-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex w-full justify-start items-center"
                    >
                      <span className="mr-5 text-purple-300">
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
