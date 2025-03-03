import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function StatsSection() {
  const testimonials = [
    {
      content:
        "Seamless and effective! Publishing my article was incredibly easy and I saw a traffic boost within days!",
      author: "Emma R.",
      role: "Data Analyst",
      avatar: "/avatars/avatar-1.jpg",
    },
    {
      content:
        "Fast professional, and impactful. The best press release service I've used - highly recommended!",
      author: "Ananya K.",
      role: "Public Relations Specialist",
      avatar: "/avatars/avatar-2.jpg",
    },
    {
      content:
        "Helped my EB-1A case! The published article strengthened my petition and made my profile more authoritative",
      author: "Ravi P.",
      role: "Senior Data Scientist",
      avatar: "/avatars/avatar-3.jpg",
    },
    {
      content:
        "A game-changer for PR! Our brand's press release got picked up by multiple outlets, boosting credibility instantly.",
      author: "Jake M.",
      role: "Digital Marketing Manager",
      avatar: "/avatars/avatar-4.jpg",
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center space-x-6">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">
              <span className="block sm:inline-flex">
                <span className="text-red-500">300+</span>
                &nbsp;Publications.&nbsp;
              </span>
              <span className="block sm:inline-flex">
                <span className="text-purple-500">50+</span>&nbsp;Authors.&nbsp;
              </span>
              <span className="block sm:inline-flex">
                <span className="text-blue-500">2000+</span>&nbsp;Views.&nbsp;
              </span>
              <span className="block sm:inline-flex">
                <span className="text-green-500">12%</span>&nbsp;Faster.&nbsp;
              </span>
              <span className="block sm:inline-flex">
                <span className="text-yellow-500">300+</span>
                &nbsp;Partners.&nbsp;
              </span>
            </h2>

            <div className="grid grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-none shadow-none bg-sky-50">
                  <CardContent className="p-6">
                    <p className="mb-4 text-gray-700">{testimonial.content}</p>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="rounded-lg shadow-sm p-4">
                  <Image
                    src="/dashboard-screenshot.png"
                    alt="Dashboard"
                    width={500}
                    height={300}
                  />
                </div>
                <p className="mb-4 text-gray-700 pt-5 text-xl">
                  Seamless and effective! As a data analyst, I wanted to share
                  my insights with a wider audience. ShoutStart made publishing
                  effortless, and I saw a traffic boost within days! The
                  platform's reach and SEO benefits exceeded my expectations.
                </p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="/avatars/avatar-5.jpg" />
                    <AvatarFallback>D</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">David L.</p>
                    <p className="text-sm text-gray-500">Tech Entrepreneur</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
