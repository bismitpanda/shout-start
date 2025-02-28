import { CornerRightDown, PenTool, Send, Volume2 } from "lucide-react";
import { StepCard } from "./step-card";

export function StepsSection() {
  const steps = [
    {
      title: "Write.",
      description:
        "Draft your content, opinion or article. Keep it short, focused and to the point.",
      color: "red",
      icon: PenTool,
    },
    {
      title: "Submit.",
      description:
        "Easily submit your content to Shoutstart, get it optimized, proof read and enhanced.",
      color: "purple",
      icon: CornerRightDown,
    },
    {
      title: "Publish.",
      description:
        "Get your content published across premium online platforms, securing maximum reach.",
      color: "teal",
      icon: Send,
    },
    {
      title: "Shout.",
      description:
        "Boost your credibility, increase SEO and expand your reach across online platforms.",
      color: "yellow",
      icon: Volume2,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">
          Four steps to recognition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              title={step.title}
              description={step.description}
              color={step.color}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
