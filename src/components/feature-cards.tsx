import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CornerRightDown, PenTool, Send, Volume2 } from "lucide-react";

export function FeatureCards() {
  const features = [
    {
      color: "bg-red-500",
      icon: PenTool,
      title: "Write",
      description:
        "Craft your press release or article in your own words, ready to be shared with the world.",
    },
    {
      color: "bg-purple-500",
      icon: CornerRightDown,
      title: "Submit",
      description:
        "Easily submit your content to ShoutStart with a seamless, guided submission process.",
    },
    {
      color: "bg-green-500",
      icon: Send,
      title: "Publish",
      description:
        "Our team reviews and publishes your content on high-authority platforms, ensuring maximum reach.",
    },
    {
      color: "bg-yellow-500",
      icon: Volume2,
      title: "Shout",
      description:
        "We boost your credibility, improve SEO rankings, and attract the right audience to your brand or profile.",
    },
  ];

  return (
    <section className="px-4 pb-8 max-w-7xl mx-auto">
      <p className="text-center text-2xl mb-8">
        Four easy steps to get you noticed
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <Card key={index} className="border-0 shadow-sm">
            <CardHeader
              className={`${feature.color} text-white rounded-t-lg p-4`}
            >
              <span className="text-2xl">
                <feature.icon />
              </span>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
              <CardDescription className="text-lg">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
