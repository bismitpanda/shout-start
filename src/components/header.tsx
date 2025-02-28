import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl">Shoutstart</span>
        </div>
        <Button variant="default" size="sm">
          Sign Up
        </Button>
      </div>
    </header>
  );
}
