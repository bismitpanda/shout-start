import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function ServicesOffer() {
  return (
    <section className="py-12">
      <h2 className="text-center text-2xl font-semibold mb-8">
        Services We Offer
      </h2>
      <div className="grid grid-cols-2 w-full bg-gradient-to-t from-[#E6E9F2] to-white">
        <div className="flex flex-row ml-30">
          <Image
            src="/Services_Pressreleases.png"
            alt="Press releases"
            width={500}
            height={500}
          />
          <div className="text-right mr-5">
            <h3 className="text-6xl mt-32">Press Releases</h3>
            <p className="mt-8">
              Official announcements for businesses, startups, and individuals.
            </p>
            <Button variant="link" className="uppercase">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex flex-row-reverse mr-30">
          <Image
            src="/Services_Article_Assistance.png"
            alt="Article Assistance"
            width={500}
            height={500}
          />
          <div className="text-left ml-5">
            <h3 className="text-6xl mt-32">Article Assistance</h3>
            <p className="mt-8">
              Thought leadership, industry insights, and opinion pieces to
              establish credibility.
            </p>
            <Button variant="link" className="uppercase">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
