import Image from "next/image";

export function PublishingPartners() {
  return (
    <section className="py-12 px-10 w-full">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Our Publishing Partners
      </h2>

      <div className="flex flex-wrap justify-center gap-8 px-32">
        {Array(23)
          .fill(undefined)
          .map((_, i) => (
            <Image
              key={i}
              src={`/logos/Logo Box-${i + 1}.png`}
              width={240}
              height={80}
              alt="Logo"
            />
          ))}
      </div>
    </section>
  );
}
