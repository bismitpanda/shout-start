import { AudienceCard } from "./audience-card";

export function TargetAudienceSection() {
  const audiences = [
    {
      title: "Authors & Casual Writers - Showcase Your Expertise",
      description:
        "Whether you're a journalist, thought leader, or independent writer, publishing with Shoutstart helps you reach a wider audience, build credibility and showcase your expertise.",
      imageSrc: "/images/authors.svg",
    },
    {
      title: "Marketers - Boost Brand Authority & SEO",
      description:
        "Press releases and expert content help you establish thought leadership, improve SEO rankings, and drive organic traffic to your business.",
      imageSrc: "/images/marketers.svg",
    },
    {
      title: "EB-1A Aspirants - Strengthen Your Public Recognition",
      description:
        "For EB-1A visa applicants, published work is a key factor in proving your extraordinary ability. Expert-placed press releases can enhance your public recognition and strengthen your case.",
      imageSrc: "/images/visa.svg",
    },
  ];

  return (
    <section className="py-16 container mx-auto px-4">
      {audiences.map((audience, index) => (
        <AudienceCard
          key={index}
          title={audience.title}
          description={audience.description}
          imageSrc={audience.imageSrc}
          isReversed={index % 2 !== 0}
        />
      ))}
    </section>
  );
}
