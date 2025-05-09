import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Research", href: "#research" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex fixed top-0 left-0 h-full w-56 bg-background shadow-md z-50 flex-col px-6 py-10 space-y-6">
        <a
          href="#hero"
          className="text-2xl font-bold tracking-tight text-primary hover:text-foreground transition mb-10"
        >
          Kei-R<span className="text-foreground">.dev</span>
        </a>

        {navItems.map((item, key) => (
          <a
            key={key}
            href={item.href}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-all relative group"
          >
            <span>{item.name}</span>
            <span className="block h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-300" />
          </a>
        ))}
      </nav>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="md:hidden fixed top-5 left-4 z-50 p-2 bg-background rounded shadow"
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Slide-Out Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-background z-40 shadow-lg transform transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 flex flex-col space-y-6">
          <a
            href="#hero"
            className="text-xl font-bold text-primary mb-8"
            onClick={() => setIsMenuOpen(false)}
          >
            Kei-R<span className="text-foreground">.dev</span>
          </a>

          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
