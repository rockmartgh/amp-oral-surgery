import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoPath from "@assets/amp-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Procedures", path: "/procedures" },
  { name: "About", path: "/about" },
  { name: "New Patients", path: "/new-patients" },
  { name: "Insurance", path: "/insurance" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src={logoPath} alt="AMP Oral Surgery Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.path ? "text-primary" : "text-slate-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="font-medium text-sm px-4 h-9">
            <Link href="/contact">Request Appointment</Link>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  location === link.path ? "text-primary" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full font-medium mt-2">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Request Appointment
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
