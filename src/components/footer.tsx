import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Shout your heart out today.</h2>
        <Button
          variant="outline"
          className="bg-transparent border-white text-white hover:bg-white hover:text-black mb-12"
        >
          Get Your Press Release
        </Button>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4">Shoutstart</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white">
              <span className="sr-only">Twitter</span>
              {/* Icon placeholder */}
              <div className="w-6 h-6 border border-white rounded-full"></div>
            </a>
            <a href="#" className="text-white">
              <span className="sr-only">Instagram</span>
              {/* Icon placeholder */}
              <div className="w-6 h-6 border border-white rounded-full"></div>
            </a>
            <a href="#" className="text-white">
              <span className="sr-only">LinkedIn</span>
              {/* Icon placeholder */}
              <div className="w-6 h-6 border border-white rounded-full"></div>
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Shoutstart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
