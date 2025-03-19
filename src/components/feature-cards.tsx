import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CornerRightDown, PenTool, Send, Volume2 } from "lucide-react";
import Image from "next/image";

export function FeatureCards() {
  const features = [
    {
      color: "bg-red-500",
      icon: "/Works_Write.svg",
      title: "Write",
      description:
        "Craft your press release or article in your own words, ready to be shared with the world.",
    },
    {
      color: "bg-purple-500",
      icon: "/Works_Submit.svg",
      title: "Submit",
      description:
        "Easily submit your content to ShoutStart with a seamless, guided submission process.",
    },
    {
      color: "bg-green-500",
      icon: "/Works_Publish.svg",
      title: "Publish",
      description:
        "Our team reviews and publishes your content on high-authority platforms, ensuring maximum reach.",
    },
    {
      color: "bg-yellow-500",
      icon: "/Works_Shout.svg",
      title: "Shout",
      description:
        "We boost your credibility, improve SEO rankings, and attract the right audience to your brand or profile.",
    },
  ];

  return (
    <section className="px-4 pb-8 max-w-7xl mx-auto bg-white">
      <p className="text-center text-2xl mb-8">How it works</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map(({ color, title, description, icon }, index) => (
          <Card key={index} className="border-0 shadow-sm rounded-2xl">
            <CardHeader
              className={`${color} text-white relative rounded-t-2xl p-4 h-32`}
            >
              <Image
                src={icon}
                alt={title}
                height={48}
                width={48}
                className="absolute bottom-0"
              />
            </CardHeader>
            <CardContent className="p-5">
              <CardTitle className="text-2xl mb-1">{title}</CardTitle>
              <CardDescription className="text-lg text-black">
                {description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
