import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import proceduresRoomImg from "@assets/office-procedure-suite.jpg";
import consultationImg from "@assets/office-consultation.jpg";

const procedures = [
  {
    name: "Implants & All-On-Four Cases",
    description:
      "Dental implants and All-on-4 full-arch restorations offer permanent, natural-looking solutions for missing or failing teeth. Using titanium posts placed precisely into the jawbone, we restore individual teeth or an entire arch — often in as few as one appointment. Every case is treatment-planned with 3D imaging for optimal placement and long-lasting outcomes.",
    benefits: ["Single & full-arch solutions", "All-on-4 same-day restorations", "3D-planned precision placement"],
  },
  {
    name: "TMD",
    description:
      "Temporomandibular Disorder affects the jaw joint and surrounding muscles, causing pain, clicking, limited opening, and headaches. Dr. Elmore evaluates the full spectrum of TMD and provides targeted treatments — from conservative therapy to surgical intervention — to relieve pain and restore normal jaw function.",
    benefits: ["Jaw pain & headache relief", "Comprehensive evaluation", "Conservative to surgical options"],
  },
  {
    name: "Painless Tooth Extraction",
    description:
      "When a tooth cannot be saved, we make sure the experience is as comfortable as possible. Using advanced techniques and sedation options, Dr. Elmore performs gentle extractions — from routine removals to complex surgical cases — with a focus on minimal discomfort and a smooth recovery.",
    benefits: ["Multiple sedation options", "Simple & surgical extractions", "Smooth, comfortable recovery"],
  },
];

export default function Procedures() {
  return (
    <div className="flex flex-col w-full">
      <title>Procedures | AMP Oral Surgery</title>

      {/* Page Hero — full-bleed background */}
      <section className="relative min-h-[58vh] overflow-hidden bg-slate-900">
        <img
          src={proceduresRoomImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/65 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-white" />
        <div className="absolute inset-0 bg-grid-dark opacity-25" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-36 pb-32">
          <Reveal y={20} className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 text-white px-3 py-1 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mt-4 mb-4">
              Our Procedures
            </h1>
            <p className="text-slate-200 text-lg leading-relaxed max-w-xl">
              Expert implant solutions, TMD treatment, and gentle extractions — delivered with
              precision, advanced technology, and genuine compassion for every patient.
            </p>
            <Button asChild className="rounded-full font-semibold px-7 mt-8 shadow-glow-soft hover:shadow-glow transition-shadow" size="lg">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((proc, i) => (
              <Reveal key={proc.name} delay={(i % 3) * 0.08}>
                <div
                  data-testid={`card-procedure-${i}`}
                  className="bg-white rounded-2xl p-7 border border-slate-200/70 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-primary to-accent mb-4 group-hover:h-10 transition-all" />
                  <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">{proc.name}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm flex-1">{proc.description}</p>
                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                    {proc.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page image + CTA strip */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal className="relative">
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl border-2 border-accent/20 hidden md:block" />
              <div className="rounded-2xl overflow-hidden aspect-[4/3] ring-frame relative">
                <img
                  src={consultationImg}
                  alt="Surgeon consulting with patient"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <span className="inline-flex items-center rounded-full bg-white text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase ring-1 ring-blue-100 shadow-soft">
                Your Care
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mt-4 mb-4">
                Have questions about a procedure?
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Contact our office to schedule a consultation. We'll evaluate your needs and walk you
                through the best treatment options — with no pressure, just clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild className="rounded-full font-semibold px-7" data-testid="button-request-consultation">
                  <Link href="/contact">
                    Request a Consultation <ArrowRight className="ml-1.5" size={16} />
                  </Link>
                </Button>
                <Button size="lg" asChild className="rounded-full font-semibold px-7 bg-slate-900 text-white hover:bg-slate-800">
                  <Link href="/new-patients">New Patient Info</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
