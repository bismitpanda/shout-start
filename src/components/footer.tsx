import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Twitter, url: "", title: "twitter" },
    { icon: Facebook, url: "", title: "facebook" },
    { icon: Instagram, url: "", title: "instagram" },
    { icon: Youtube, url: "", title: "youtube" },
  ];

  return (
    <footer className="bg-black text-white py-8 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Shoutstart</h2>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map((social) => (
            <a key={social.title} href={social.url} className="text-white">
              <span className="sr-only">{social.title}</span>
              <span>
                <social.icon />
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
