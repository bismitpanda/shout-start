import { Button } from "@/components/ui/button";

interface AudienceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  isReversed?: boolean;
}

export function AudienceCard({
  title,
  description,
  imageSrc,
  isReversed = false,
}: AudienceCardProps) {
  return (
    <div
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 mb-16`}
    >
      <div className="w-full md:w-1/3">
        <div className="bg-gray-100 rounded-lg p-6 h-48 flex items-center justify-center">
          {/* Image placeholder - in a real app, use next/image or img tag */}
          <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      <div className="w-full md:w-2/3">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <Button variant="outline" size="sm">
          LEARN MORE
        </Button>
      </div>
    </div>
  );
}
