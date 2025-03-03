import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function StatsSection() {
  const testimonials = [
    {
      content:
        "Thanks to ShoutStart my article went viral and got 20k views in just 24 hours.",
      author: "John S.",
      role: "Marketing Expert",
      avatar: "/avatar1.png",
    },
    {
      content:
        "A total gamechanger for PR! My press release was picked up by 7 major outlets.",
      author: "Sarah M.",
      role: "PR Specialist",
      avatar: "/avatar2.png",
    },
    {
      content:
        "Doubled my website traffic with just one article placement. Amazing platform!",
      author: "David L.",
      role: "Tech Entrepreneur",
      avatar: "/avatar3.png",
    },
    {
      content:
        "Doubled my website traffic with just one article placement. Amazing platform!",
      author: "David L.",
      role: "Tech Entrepreneur",
      avatar: "/avatar3.png",
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
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-6">
                    <p className="mb-4 text-gray-700">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
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
                <p className="mb-4 text-gray-700 pt-5">
                  &ldquo;Doubled my website traffic with just one article
                  placement. Amazing platform!&rdquo;
                </p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="/avatar3.png" />
                    <AvatarFallback>D</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">David L.</p>
                    <p className="text-sm text-gray-500">
                      Tech EnEntrepreneurtr
                    </p>
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
