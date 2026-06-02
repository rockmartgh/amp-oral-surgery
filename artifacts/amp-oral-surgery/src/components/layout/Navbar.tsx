import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
      {/* Top strip */}
      <div className="hidden md:block bg-slate-900 text-slate-300 text-xs">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-8">
          <span>Expert Oral & Maxillofacial Surgery</span>
          <a href="tel:5558675309" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={11} />
            (555) 867-5309 &nbsp;·&nbsp; Mon–Fri 8 AM–5 PM
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-2.5">
          <img src={logoPath} alt="AMP Oral Surgery" className="h-9 w-auto object-contain" />
          <span className="font-display font-bold text-slate-900 text-base leading-tight hidden sm:block">
            AMP<br />
            <span className="text-primary text-xs font-semibold tracking-wide">Oral Surgery</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                location === link.path
                  ? "bg-primary/10 text-primary"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="rounded-full font-semibold px-5 h-9 text-sm">
            <Link href="/contact">Request Appointment</Link>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden p-2 text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-5">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  location === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 mt-1 border-t border-slate-100">
              <Button asChild className="w-full rounded-full font-semibold mt-2">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Request Appointment
                </Link>
              </Button>
              <a href="tel:5558675309" className="flex items-center justify-center gap-2 text-slate-500 text-sm mt-3">
                <Phone size={13} /> (555) 867-5309
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
