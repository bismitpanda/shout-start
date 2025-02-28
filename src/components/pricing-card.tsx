import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
}

export function PricingCard({
  title,
  price,
  description,
  features,
}: PricingCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="text-center pb-2">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-3xl font-bold">{price}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </CardHeader>

      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button variant="outline" className="w-full">
          Get Your Press Release
        </Button>
      </CardFooter>
    </Card>
  );
}
