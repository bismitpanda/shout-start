import { Button } from "@/components/ui/button";
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
        <Button
          variant="default"
          size="sm"
          className="bg-black text-white rounded"
        >
          Get in Touch
        </Button>
      </Link>
    </header>
  );
}
