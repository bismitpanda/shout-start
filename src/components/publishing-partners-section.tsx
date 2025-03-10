import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
  alt: string;
}

export function PublishingPartners() {
  const partners = [
    ["/logos/CEOWORLD Magazine.png", "CEOWORLD Magazine"],
    ["/logos/DetroitMetroTimes.png", "DetroitMetroTimes"],
    ["/logos/Forbes.png", "Forbes"],
    ["/logos/GlobalBanking&FinanceReview.png", "GlobalBanking&FinanceReview"],
    ["/logos/HackerNoon.png", "HackerNoon"],
    ["/logos/InquirerNet.png", "InquirerNet"],
    ["/logos/InternationalBusinessTimes.png", "InternationalBusinessTimes"],
    ["/logos/LAWEEKLY.png", "LAWEEKLY"],
    ["/logos/MetaPress.png", "MetaPress"],
    ["/logos/PressConnects.png", "PressConnects"],
    ["/logos/StreetInsidersCom.png", "StreetInsidersCom"],
    ["/logos/TechTimes.png", "TechTimes"],
    ["/logos/theJerusalemPost.png", "theJerusalemPost"],
    ["/logos/theVillageVoice.png", "theVillageVoice"],
    ["/logos/TheWashingtonTimes.png", "TheWashingtonTimes"],
  ] as const;

  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Publishing Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center">
          {partners.map(([src, name]) => (
            <div
              key={name}
              className="w-full flex items-center justify-center h-36"
            >
              <Image
                src={src}
                alt={name}
                width={150}
                height={60}
                className="object-contain max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
