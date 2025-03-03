import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function PublicationsOffer() {
  const publicationTypes = [
    {
      title: "Books & E-books",
      icon: "/book-icon.svg",
      description:
        "Get published in our book series and e-libraries across our network.",
    },
    {
      title: "Press Releases",
      icon: "/press-icon.svg",
      description:
        "Share your news and announcements across our media partners.",
    },
    {
      title: "Articles",
      icon: "/article-icon.svg",
      description:
        "Publish opinion pieces, insights, and analyses on our network.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4">
      <h2 className="text-center text-2xl font-semibold mb-8">
        Publications We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {publicationTypes.map((type, index) => (
          <Card
            key={index}
            className="border border-gray-200 hover:shadow-md transition-shadow"
          >
            <CardHeader className="pb-2">
              <div className="h-50 flex items-center justify-center">
                <div className="size-36 relative">
                  <Image src={type.icon} alt={type.title} fill />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
              <p className="text-gray-600">{type.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="text-blue-600 p-0">
                LEARN MORE
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
