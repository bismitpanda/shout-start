export function Footer() {
  const socialLinks = ["twitter", "facebook", "instagram", "youtube"];

  return (
    <footer className="bg-black text-white py-8 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Shoutstart</h2>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map((social, index) => (
            <a key={index} href={`#${social}`} className="text-white">
              <span className="sr-only">{social}</span>
              <span>•</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
