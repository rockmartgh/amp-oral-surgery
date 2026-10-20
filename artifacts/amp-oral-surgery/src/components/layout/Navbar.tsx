import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, Clock, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logoPath from "@assets/amp-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Procedures", path: "/procedures" },
  { name: "About", path: "/about" },
  { name: "New Patients", short: "Patients", path: "/new-patients" },
  { name: "Insurance", path: "/insurance" },
  { name: "Patient Resources", short: "Resources", path: "/patient-resources" },
  { name: "Contact", path: "/contact" },
];

const procedureItems = [
  "Implants & All-On-Four Cases",
  "TMD",
  "Painless Tooth Extraction",
];

const heroRoutes = navLinks.map((l) => l.path);

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [procOpen, setProcOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProcOpen(false);
  }, [location]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileMenuOpen]);

  const overHero = heroRoutes.includes(location) && !scrolled && !mobileMenuOpen;

  function openProc() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProcOpen(true);
  }
  function closeProc() {
    closeTimer.current = setTimeout(() => setProcOpen(false), 130);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        overHero
          ? "bg-gradient-to-b from-slate-950/55 via-slate-950/25 to-transparent"
          : mobileMenuOpen
            ? "bg-white"
            : "bg-white/85 backdrop-blur-lg shadow-[0_1px_0_rgba(15,23,42,0.05),0_10px_30px_-12px_rgba(15,23,42,0.18)]"
      }`}
    >
      {/* Top utility strip — wide screens only */}
      <div
        className={`hidden xl:block overflow-hidden border-b transition-all duration-300 ${
          overHero ? "max-h-10 border-white/10" : "max-h-0 border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex h-9 items-center justify-between text-xs text-white/80">
          <div className="flex items-center gap-5 min-w-0">
            <span className="flex items-center gap-1.5 truncate">
              <MapPin size={12} className="text-white/55 shrink-0" />
              3861 Avalon Park E Blvd, Orlando, FL 32828
            </span>
            <span className="hidden 2xl:flex items-center gap-1.5 shrink-0">
              <Clock size={12} className="text-white/55" />
              Mon–Sat, 8 AM–4 PM
            </span>
          </div>
          <a
            href="tel:4075440139"
            className="flex items-center gap-1.5 font-medium hover:text-white transition-colors shrink-0"
          >
            <Phone size={12} />
            407-544-0139
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`container mx-auto px-4 lg:px-8 flex items-center justify-between gap-3 transition-all duration-300 ${
          overHero ? "h-20" : "h-16"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setMobileMenuOpen(false)}>
          <img
            src={logoPath}
            alt="AMP Oral Surgery"
            className={`h-8 sm:h-9 w-auto object-contain transition-all ${
              overHero ? "brightness-0 invert" : "brightness-0"
            }`}
          />
        </Link>

        {/* Desktop Nav — hamburger only on phones */}
        <nav className="hidden md:flex items-center justify-center gap-3 lg:gap-5 xl:gap-6 2xl:gap-8 min-w-0 flex-1">
          {navLinks.map((link) => {
            const active = location === link.path;
            const linkClass = `group relative py-2 text-[13px] xl:text-sm font-medium tracking-wide whitespace-nowrap transition-colors ${
              active
                ? overHero ? "text-white" : "text-primary"
                : overHero ? "text-white/75 hover:text-white" : "text-slate-600 hover:text-slate-900"
            }`;
            const underline = (
              <span
                className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full bg-current transition-all duration-300 ${
                  active ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            );

            if (link.name === "Procedures") {
              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={openProc}
                  onMouseLeave={closeProc}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setProcOpen(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setProcOpen(false);
                  }}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={procOpen}
                    onClick={() => setProcOpen((o) => !o)}
                    onFocus={openProc}
                    className={`${linkClass} flex items-center gap-1`}
                  >
                    Procedures
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${procOpen ? "rotate-180" : ""}`}
                    />
                    {underline}
                  </button>

                  {procOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/60 p-2 z-50"
                      onMouseEnter={openProc}
                      onMouseLeave={closeProc}
                    >
                      <div className="flex flex-col">
                        {procedureItems.map((proc) => (
                          <Link
                            key={proc}
                            href="/procedures"
                            onClick={() => setProcOpen(false)}
                            className="px-4 py-2.5 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-primary text-sm font-medium transition-colors"
                          >
                            {proc}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-1 pt-1 border-t border-slate-100">
                        <Link
                          href="/procedures"
                          onClick={() => setProcOpen(false)}
                          className="flex items-center justify-center gap-1 px-4 py-2 text-xs text-primary font-semibold hover:underline"
                        >
                          View All Procedures <ArrowRight size={11} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link key={link.path} href={link.path} className={linkClass}>
                {link.short ? (
                  <>
                    <span className="xl:hidden">{link.short}</span>
                    <span className="hidden xl:inline">{link.name}</span>
                  </>
                ) : (
                  link.name
                )}
                {underline}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2 xl:gap-3 shrink-0">
          <a
            href="tel:4075440139"
            aria-label="Call AMP Oral Surgery"
            className="hidden lg:inline-flex transition-transform hover:scale-105"
          >
            <span
              className={`flex h-9 w-9 xl:h-10 xl:w-10 items-center justify-center rounded-full transition-colors ${
                overHero ? "border border-white/25 bg-white/10" : "bg-blue-50"
              }`}
            >
              <Phone size={16} className={overHero ? "text-white" : "text-primary"} />
            </span>
          </a>
          <Button
            asChild
            className="rounded-full font-semibold px-4 xl:px-5 2xl:px-6 h-9 xl:h-10 shadow-glow-soft hover:shadow-glow transition-shadow"
          >
            <Link href="/contact">
              <span className="xl:hidden">Book</span>
              <span className="hidden xl:inline">Request Appointment</span>
            </Link>
          </Button>
        </div>

        {/* Phone actions */}
        <div className="flex md:hidden items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            href="tel:4075440139"
            aria-label="Call AMP Oral Surgery"
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
              overHero ? "border border-white/25 bg-white/10 text-white" : "bg-blue-50 text-primary"
            }`}
          >
            <Phone size={15} />
          </a>
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex rounded-full font-semibold h-9 px-3.5"
          >
            <Link href="/contact">Book</Link>
          </Button>
          <button
            type="button"
            className={`p-2 rounded-full ${overHero ? "text-white" : "text-slate-700"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Compact menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <nav className="container mx-auto px-4 pt-3 pb-6 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                  location === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-3 pt-4 border-t border-slate-100 space-y-3">
              <Button asChild className="w-full rounded-full font-semibold h-11">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Request Appointment
                </Link>
              </Button>
              <a
                href="tel:4075440139"
                className="flex items-center justify-center gap-2 text-slate-600 text-sm font-medium py-1"
              >
                <Phone size={14} /> 407-544-0139
              </a>
              <p className="flex items-start justify-center gap-2 text-xs text-slate-400 text-center leading-relaxed px-4">
                <MapPin size={12} className="mt-0.5 shrink-0" />
                3861 Avalon Park E Blvd, Orlando, FL 32828
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
