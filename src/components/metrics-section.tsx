"use client";

import { useState, useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export function MetricsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideRef = useRef(null);
  const animationRef = useRef<number>(null);
  const startTimeRef = useRef<number>(null);
  const intervalDuration = 5000;

  const testimonials = [
    {
      text: "ShoutStart's expertly crafted press releases significantly enhanced my research's visibility, leading to features in prominent publications like News24.",
      name: "Rahul A.",
      role: "Data Scientist and Financial Economist",
      avatar: "/avatars/Rahul A.png",
    },
    {
      text: "ShoutStart's press release on our company's merger garnered significant attention, leading to features in prominent publications like Yahoo Finance.",
      name: "Nikin T.",
      role: "Co-founder",
      avatar: "/avatars/Nikin T.png",
    },
    {
      text: "Partnering with ShoutStart amplified our mission to support high-skilled immigrants, resulting in increased recognition through major outlets such as Business Insider.",
      name: "Rathnakumar U.",
      role: "Founder & CEO",
      avatar: "/avatars/Rathnakumar U.png",
    },
    {
      text: "HShoutStart's expertly crafted articles significantly boosted our visibility, leading to features in prominent publications like Business Insider.",
      name: "Soundarya B.",
      role: "CEO & Founder",
      avatar: "/avatars/Soundarya B.png",
    },
  ];

  const featuredTestimonials = [
    {
      text: "I am grateful for the strategic approach taken by this team in highlighting my contributions to cybersecurity. The press release featured in Zee News underscored my success story, reaching a diverse and extensive audience. This exposure has been instrumental in elevating my professional standing within the industry. Their dedication to delivering quality content is truly exceptional.",
      name: "Pandi K.",
      role: "Senior Security Program Manager",
      avatar: "/avatars/Pandi K.png",
      image: "/Publication-Shot-1.png",
      title: "Enhanced Visibility in the Cybersecurity Community",
    },
    {
      text: "The team adeptly narrated my progression from engineering student to Senior Security Program Manager in a compelling article featured on India.com. This storytelling not only resonated with a broad audience but also highlighted my dedication and passion. Their ability to authentically capture and share my story is commendable.",
      name: "Pandi K.",
      role: "Senior Security Program Manager",
      avatar: "/avatars/Pandi K.png",
      image: "/Publication-Shot-2.png",
      title: "Showcased My Career Journey Effectively",
    },
    {
      text: "Partnering with this service was transformative for my career. Their expertly crafted press release led to my work being featured in DNA India, showcasing my role in building identity management systems. This exposure significantly enhanced my professional credibility and opened new opportunities. I highly recommend their services to professionals aiming to amplify their reach.",
      name: "Pandi K.",
      role: "Senior Security Program Manager",
      avatar: "/avatars/Pandi K.png",
      image: "/Publication-Shot-3.png",
      title: "Elevated My Professional Profile",
    },
  ];

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;
    const newProgress = Math.min(100, (elapsed / intervalDuration) * 100);
    setProgress(newProgress);

    if (elapsed < intervalDuration) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setCurrentSlide((prev) =>
        prev === featuredTestimonials.length - 1 ? 0 : prev + 1
      );
      startTimeRef.current = timestamp;
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    startTimeRef.current = null;
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentSlide]);

  const handleNextSlide = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    setCurrentSlide((prev) =>
      prev === featuredTestimonials.length - 1 ? 0 : prev + 1
    );

    startTimeRef.current = null;
    setProgress(0);
    animationRef.current = requestAnimationFrame(animate);
  };

  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress / 100);

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
                    <div className="md:w-1/2 px-2 pt-2 bg-gray-200 rounded-3xl">
                      <Image
                        src={item.image}
                        alt="ShoutStart Dashboard"
                        width={600}
                        height={300}
                        className="rounded-md"
                      />
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-between pb-8">
                      <div className="mt-10">
                        <p className="text-3xl">{item.title}</p>
                        <p className="text-gray-700 mt-6 text-lg">
                          {item.text}
                        </p>
                      </div>
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

          <div
            className="absolute right-6 bottom-6 group"
            onClick={handleNextSlide}
          >
            <div className="relative size-10">
              <svg
                className="absolute w-full h-full z-20"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="transparent"
                  stroke="#e2e8f0"
                  strokeWidth="4"
                />
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="transparent"
                  stroke="black"
                  strokeWidth="7"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute z-10 shadow-none m-auto bg-white rounded-full w-10 h-10 p-0 text-gray-600 group-hover:text-gray-900 group-hover:bg-gray-300 flex items-center justify-center">
                <ChevronRight className="h-6 w-6" />
              </div>
            </div>
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
