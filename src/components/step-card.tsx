import { LucideIcon } from "lucide-react";

interface StepCardProps {
  title: string;
  description: string;
  color: string;
  icon: LucideIcon;
}

export function StepCard({
  title,
  description,
  color,
  icon: Icon,
}: StepCardProps) {
  const getColorClasses = (color: string) => {
    const colorMap: Record<
      string,
      { bg: string; iconBg: string; iconText: string }
    > = {
      red: { bg: "bg-red-50", iconBg: "bg-red-100", iconText: "text-red-500" },
      purple: {
        bg: "bg-purple-50",
        iconBg: "bg-purple-100",
        iconText: "text-purple-500",
      },
      teal: {
        bg: "bg-teal-50",
        iconBg: "bg-teal-100",
        iconText: "text-teal-500",
      },
      yellow: {
        bg: "bg-yellow-50",
        iconBg: "bg-yellow-100",
        iconText: "text-yellow-500",
      },
    };

    return colorMap[color] || colorMap.red;
  };

  const colorClasses = getColorClasses(color);

  return (
    <div className={`${colorClasses.bg} p-6 rounded-lg shadow-sm`}>
      <div
        className={`w-12 h-12 ${colorClasses.iconBg} rounded-full flex items-center justify-center mb-4`}
      >
        <span className={colorClasses.iconText}>
          <Icon />
        </span>
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
