import Image from "next/image";

export function PublishingPartners() {
  const partners = [
    ["/logos/CEOWORLD Magazine.png", "CEOWORLD Magazine", 253],
    ["/logos/DetroitMetroTimes.png", "DetroitMetroTimes", 273],
    ["/logos/Forbes.png", "Forbes", 173],
    [
      "/logos/GlobalBanking&FinanceReview.png",
      "GlobalBanking&FinanceReview",
      210,
    ],
    ["/logos/HackerNoon.png", "HackerNoon", 297],
    ["/logos/InquirerNet.png", "InquirerNet", 209],
    [
      "/logos/InternationalBusinessTimes.png",
      "InternationalBusinessTimes",
      501,
    ],
    ["/logos/LAWEEKLY.png", "LAWEEKLY", 211],
    ["/logos/MetaPress.png", "MetaPress", 236],
    ["/logos/PressConnects.png", "PressConnects", 352],
    ["/logos/StreetInsidersCom.png", "StreetInsidersCom", 235],
    ["/logos/TechTimes.png", "TechTimes", 135],
    ["/logos/theJerusalemPost.png", "theJerusalemPost", 449],
    ["/logos/theVillageVoice.png", "theVillageVoice", 199],
    ["/logos/TheWashingtonTimes.png", "TheWashingtonTimes", 411],
  ] as const;

  const row1 = partners.slice(0, 5);
  const row2 = partners.slice(5, 10);
  const row3 = partners.slice(10, 14);
  const row4 = partners.slice(14);

  return (
    <section className="py-12 px-10 w-full">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Our Publishing Partners
      </h2>

      <div className="flex flex-col items-center space-y-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full">
          {row1.map(([logo, name, width]) => (
            <div key={name} className="flex items-center justify-center h-20">
              <Image
                src={logo}
                alt={logo}
                width={width}
                height={60}
                className="object-contain max-h-full"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full">
          {row2.map(([logo, name, width]) => (
            <div key={name} className="flex items-center justify-center h-20">
              <Image
                src={logo}
                alt={logo}
                width={width}
                height={60}
                className="object-contain max-h-full"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full">
          {row3.map(([logo, name, width]) => (
            <div key={name} className="flex items-center justify-center h-20">
              <Image
                src={logo}
                alt={logo}
                width={width}
                height={60}
                className="object-contain max-h-full"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full">
          {row4.map(([logo, name, width]) => (
            <div key={name} className="flex items-center justify-center h-20">
              <Image
                src={logo}
                alt={logo}
                width={width}
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
