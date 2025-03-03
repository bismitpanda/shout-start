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
        "Get your ideas in front of readers. Submit any format, we'll do the rest.",
    },
    {
      color: "bg-purple-500",
      icon: CornerRightDown,
      title: "Submit",
      description:
        "Get published in prestigious, highly trafficked publications across our network.",
    },
    {
      color: "bg-green-500",
      icon: Send,
      title: "Publish",
      description:
        "Your content on platforms reaching millions of readers and potential customers.",
    },
    {
      color: "bg-yellow-500",
      icon: Volume2,
      title: "Shout",
      description:
        "Amplify your voice with our social network and promotional tools.",
    },
  ];

  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <p className="text-center text-lg mb-8">
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
