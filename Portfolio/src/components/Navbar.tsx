import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    // Adds an event listener that triggers handleScroll when the page is scrolled.
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the scroll listener when the component is unmounted.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-900 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-10 w-full my-4">
        <div className="flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="/"
          >
            <span className="relative z-10">
              <span className="text-glow text-stone-50">RJ</span>
            </span>
          </a>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a key={key} href={item.href} className="text-foreground/80 hover:text-emerald-400 transition-colors duration-300">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
