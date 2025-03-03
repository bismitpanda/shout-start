import { Button } from "@/components/ui/button";
import Image from "next/image";

export function RecentPublications() {
  const publications = [
    { title: "ALONE", cover: "/book1.jpg", author: "Jane D." },
    { title: "RISE TITLE ONE LINER", cover: "/book2.jpg", author: "John R." },
    { title: "THE POWER OF VISION", cover: "/book3.jpg", author: "Marcus P." },
    { title: "UNTITLED", cover: "/book4.jpg", author: "Rebecca S." },
    { title: "EARTH BOUND", cover: "/book5.jpg", author: "Emma B." },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Recent publications</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {publications.map((pub, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-52 w-36 bg-gray-200 mb-2">
                <Image
                  src={pub.cover}
                  alt={pub.title}
                  width={144}
                  height={208}
                  className="object-cover h-full w-full"
                />
              </div>
              <p className="font-medium text-center">{pub.title}</p>
              <p className="text-sm text-gray-500 text-center">{pub.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
