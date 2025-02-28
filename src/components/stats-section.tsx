import { Card, CardContent } from "@/components/ui/card";

export function StatsSection() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-red-500">300+</span> Publications.
            <span className="text-purple-500">50+</span> Authors.
            <span className="text-green-500">2000+</span> Views.
            <span className="text-yellow-500">12%</span> Faster.
            <span className="text-teal-500">900+</span> Partners.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <TestimonialCard
              quote="Working with Shoutstart has been a game-changer for my visibility online. I got a huge boost in traffic!"
              author="John Doe"
              position="Marketing Director"
            />
            <TestimonialCard
              quote="I've used many PR services, but this one is the best! The team is responsive and results are impressive."
              author="Jane Smith"
              position="Content Marketing Manager"
            />
            <TestimonialCard
              quote="As a small business owner, finding ways to improve my online presence is crucial. Shoutstart delivered beyond expectations."
              author="Robert Johnson"
              position="CEO, TechStart"
            />
            <TestimonialCard
              quote="The seamless process and expert guidance helped us get featured in top publications within weeks."
              author="Sarah Williams"
              position="Communications Director"
            />
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          {/* Dashboard Preview Image Placeholder */}
          <div className="bg-white rounded-lg shadow-sm p-4 h-64 mb-4"></div>

          <blockquote className="text-sm italic text-gray-700 mt-4">
            "Seamless and effective! As a beta product, I wanted to share my
            insights with a wider audience. Shoutstart made publishing
            effortless, and I saw a traffic boost within days! The platform's
            simplicity exceeded my expectations."
          </blockquote>
          <div className="flex items-center mt-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
            <span className="text-sm font-medium">
              Alex Thompson, Product Manager
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
}

function TestimonialCard({ quote, author, position }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-sm text-gray-700 mb-2">{quote}</p>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
          <div>
            <p className="text-xs font-medium">{author}</p>
            <p className="text-xs text-gray-500">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
