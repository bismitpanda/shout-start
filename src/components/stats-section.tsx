import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function StatsSection() {
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

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="uppercase text-gray-600 text-sm font-medium mb-4">
            OUR METRICS
          </p>
          <div className="text-5xl font-bold">
            <span className="text-yellow-400">12%</span> Faster.{" "}
            <span className="text-blue-500">50+</span> Authors.{" "}
            <span className="text-red-500">300+</span> Publications.{" "}
            <span className="text-green-600">2000+</span> Views.
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <Image
                src="/dashboard-screenshot.png"
                alt="ShoutStart Dashboard"
                width={600}
                height={400}
                className="rounded-md"
              />
            </div>
            <div className="md:w-1/2">
              <div className="mb-4">
                <p className="text-gray-700 font-medium">
                  Press Release • Articles
                </p>
              </div>
              <p className="text-gray-700 mb-6">
                Seamless and effective! As a data analyst, I wanted to share my
                insights with a wider audience. ShoutStart made publishing
                effortless, and I saw a traffic boost within days! The
                platform's reach and SEO benefits exceeded my expectations.
              </p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src="/avatars/avatar-5.jpg" alt="Anurag P." />
                  <AvatarFallback>AP</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Anurag P.</p>
                  <p className="text-gray-600 text-sm">Senior Data Analyst</p>
                </div>
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
