import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function ServicesOffered() {
  return (
    <section className="py-8 md:py-12">
      <h2 className="text-center text-xl md:text-2xl font-semibold mb-4 md:mb-8">
        Services We Offer
      </h2>
      <div className="w-full bg-gradient-to-t from-[#E6E9F2] to-white">
        {/* Mobile layout (stacked) */}
        <div className="block lg:hidden">
          {/* First service - mobile */}
          <div className="px-4 py-6">
            <div className="flex justify-center mb-4">
              <Image
                src="/Services_Pressreleases.png"
                alt="Press releases"
                width={300}
                height={300}
                className="w-full max-w-sm"
              />
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-medium">
                Press Releases
              </h3>
              <p className="mt-4">
                Official announcements for businesses, startups, and
                individuals.
              </p>
              <Button variant="link" className="uppercase mt-2">
                <ChevronLeft className="h-4 w-4" /> Learn More
              </Button>
            </div>
          </div>

          {/* Second service - mobile */}
          <div className="px-4 py-6">
            <div className="flex justify-center mb-4">
              <Image
                src="/Services_Article_Assistance.png"
                alt="Article Assistance"
                width={300}
                height={300}
                className="w-full max-w-sm"
              />
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-medium">
                Article Assistance
              </h3>
              <p className="mt-4">
                Thought leadership, industry insights, and opinion pieces to
                establish credibility.
              </p>
              <Button variant="link" className="uppercase mt-2">
                Learn More <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop layout (side by side) */}
        <div className="hidden lg:grid lg:grid-cols-2">
          <div className="flex flex-col md:flex-row md:items-center px-4 lg:px-8">
            <div className="md:w-1/2">
              <Image
                src="/Services_Pressreleases.png"
                alt="Press releases"
                width={500}
                height={500}
                className="w-full"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-right p-4">
              <h3 className="text-4xl lg:text-5xl xl:text-6xl font-semibold">
                Press
                <br />
                Releases
              </h3>
              <p className="mt-4">
                Official announcements for businesses, startups, and
                individuals.
              </p>
              <Button variant="link" className="uppercase mt-4">
                <ChevronLeft className="h-4 w-4" /> Learn More
              </Button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse md:items-center px-4 lg:px-8">
            <div className="md:w-1/2">
              <Image
                src="/Services_Article_Assistance.png"
                alt="Article Assistance"
                width={500}
                height={500}
                className="w-full"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left p-4">
              <h3 className="text-4xl lg:text-5xl xl:text-6xl font-semibold">
                Article
                <br />
                Assistance
              </h3>
              <p className="mt-4">
                Thought leadership, industry insights, and opinion pieces to
                establish credibility.
              </p>
              <Button variant="link" className="uppercase mt-4">
                Learn More <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
