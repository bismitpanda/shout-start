import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="p-4 flex justify-between items-center bg-white">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            width={200}
            height={32}
            src="/logo-extended.svg"
            alt="Shout Start"
          />
        </Link>
      </div>
      <Link href="">
        <Button className="rounded-full p-5 group mt-4">
          Get in Touch{" "}
          <ChevronRight className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
        </Button>
      </Link>
    </header>
  );
}
