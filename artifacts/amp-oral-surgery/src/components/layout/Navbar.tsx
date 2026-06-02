import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import logoPath from "@assets/amp-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Procedures", path: "/procedures" },
  { name: "About", path: "/about" },
  { name: "New Patients", path: "/new-patients" },
  { name: "Insurance", path: "/insurance" },
  { name: "Contact", path: "/contact" },
];

const heroRoutes = navLinks.map((l) => l.path);

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overHero = heroRoutes.includes(location) && !scrolled && !mobileMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        overHero
          ? "bg-gradient-to-b from-slate-950/55 via-slate-950/25 to-transparent"
          : "bg-white/85 backdrop-blur-lg shadow-[0_1px_0_rgba(15,23,42,0.05),0_10px_30px_-12px_rgba(15,23,42,0.18)]"
      }`}
    >
      {/* Top utility strip */}
      <div
        className={`hidden md:block overflow-hidden border-b transition-all duration-300 ${
          overHero ? "max-h-10 border-white/10" : "max-h-0 border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex h-9 items-center justify-between text-xs text-white/80">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin size={12} className="text-white/55" />
              3861 Avalon Park E Blvd, Orlando, FL 32828
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-white/55" />
              Mon–Sat, 8 AM–4 PM
            </span>
          </div>
          <a
            href="tel:4075440139"
            className="flex items-center gap-1.5 font-medium hover:text-white transition-colors"
          >
            <Phone size={12} />
            407-544-0139
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`container mx-auto px-4 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          overHero ? "h-20" : "h-16"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src={logoPath}
            alt="AMP Oral Surgery"
            className={`h-9 w-auto object-contain transition-all ${
              overHero ? "brightness-0 invert" : ""
            }`}
          />
          <span className="font-display font-bold text-base leading-tight hidden sm:block">
            <span className={overHero ? "text-white" : "text-slate-900"}>AMP</span>
            <br />
            <span
              className={`text-xs font-semibold tracking-wide ${
                overHero ? "text-blue-200" : "text-primary"
              }`}
            >
              Oral Surgery
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = location === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`group relative py-2 text-sm font-medium tracking-wide transition-colors ${
                  active
                    ? overHero
                      ? "text-white"
                      : "text-primary"
                    : overHero
                      ? "text-white/75 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full bg-current transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:4075440139"
            aria-label="Call AMP Oral Surgery"
            className="transition-transform hover:scale-105"
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                overHero ? "border border-white/25 bg-white/10" : "bg-blue-50"
              }`}
            >
              <Phone size={16} className={overHero ? "text-white" : "text-primary"} />
            </span>
          </a>
          <Button
            asChild
            className="rounded-full font-semibold px-6 h-10 shadow-glow-soft hover:shadow-glow transition-shadow"
          >
            <Link href="/contact">Request Appointment</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 ${overHero ? "text-white" : "text-slate-700"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-5 shadow-lg">
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
              <a
                href="tel:4075440139"
                className="flex items-center justify-center gap-2 text-slate-500 text-sm mt-3"
              >
                <Phone size={13} /> 407-544-0139
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
