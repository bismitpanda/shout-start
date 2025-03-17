"use client";

import { useState, useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export function MetricsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const testimonials = [
    {
      text: "Seamless and effective! Publishing my article was incredibly easy, and I saw a traffic boost within days!",
      name: "Emma R.",
      role: "Data Analyst",
      avatar: "/avatars/avatar-1.jpg",
    },
    {
      text: "A game-changer for PR! Our brand's press release got picked up by multiple outlets, boosting credibility instantly.",
      name: "Jake M.",
      role: "Digital Marketing Manager",
      avatar: "/avatars/avatar-2.jpg",
    },
    {
      text: "Fast, professional, and impactful. The best press release service I've used—highly recommended!",
      name: "Ananya K.",
      role: "Public Relations Specialist",
      avatar: "/avatars/avatar-3.jpg",
    },
    {
      text: "Helped my EB-1A case! The published article strengthened my petition and made my profile more authoritative",
      name: "Ravi P.",
      role: "Senior Data Scientist",
      avatar: "/avatars/avatar-4.jpg",
    },
  ];

  const featuredTestimonials = [
    {
      text: "Seamless and effective! As a data analyst, I wanted to share my insights with a wider audience. ShoutStart made publishing effortless, and I saw a traffic boost within days! The platform's reach and SEO benefits exceeded my expectations.",
      name: "Anurag P.",
      role: "Senior Data Analyst",
      avatar: "/avatars/avatar-5.jpg",
      image: "/Publication-Shot-1.png",
      category: "Press Release • Articles",
    },
    {
      text: "ShoutStart transformed our company's visibility in the industry. The targeted approach to media outreach helped us connect with the right journalists who were genuinely interested in our story.",
      name: "Sarah L.",
      role: "Startup Founder",
      avatar: "/avatars/avatar-6.jpg",
      image: "/Publication-Shot-2.png",
      category: "Media Outreach • PR",
    },
    {
      text: "The results speak for themselves - within weeks of publishing through ShoutStart, our content was ranking on the first page of Google for our target keywords. The SEO benefits have been tremendous.",
      name: "Michael T.",
      role: "Content Marketing Director",
      avatar: "/avatars/avatar-7.jpg",
      image: "/Publication-Shot-3.png",
      category: "SEO • Content Marketing",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === featuredTestimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredTestimonials.length, currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="w-full text-center text-gray-600 text-sm font-medium mb-4">
            Our Metrics
          </p>
          <div className="text-7xl text-center font-bold">
            <span className="text-yellow-400">12%</span> Faster.{" "}
            <span className="text-blue-500">50+</span> Authors.{" "}
            <span className="text-red-500">300+</span> Publications.{" "}
            <span className="text-green-600">2000+</span> Views.
          </div>
        </div>

        <div className="relative bg-white border border-gray-200 rounded-lg p-6 mb-12">
          <div className="overflow-hidden" ref={slideRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredTestimonials.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2 px-3 pt-3 bg-gray-200 rounded-md">
                      <Image
                        src={item.image}
                        alt="ShoutStart Dashboard"
                        width={600}
                        height={300}
                        className="rounded-md"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <div className="mb-4">
                        <p className="text-gray-700 font-medium">
                          {item.category}
                        </p>
                      </div>
                      <p className="text-gray-700 mb-6">{item.text}</p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={item.avatar} alt={item.name} />
                          <AvatarFallback>
                            {item.name.split(" ")[0][0]}
                            {item.name.split(" ")[1][0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-gray-600 text-sm">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-15 bottom-15 transform size-8">
            <Button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === featuredTestimonials.length - 1 ? 0 : prev + 1
                )
              }
              className="bg-white rounded-full size-12 p-2 shadow-md text-gray-600 hover:text-gray-900 outline-1"
            >
              <ChevronRight className="size-8" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <Card key={index} className="border-none shadow-none bg-slate-100">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">{item.text}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={item.avatar} alt={item.name} />
                    <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-600 text-sm">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
