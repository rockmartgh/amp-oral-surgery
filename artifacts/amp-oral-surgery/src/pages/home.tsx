import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldCheck, Heart, Stethoscope, ArrowRight, Star, Phone, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroImg from "@assets/office-surgery.jpg";
import heroBgImg from "@assets/office-reception-hero.jpg";
import aboutImg from "@assets/office-team.jpg";
import consultationImg from "@assets/office-consultation.jpg";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "5,000+", label: "Patients Treated" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "3", label: "Board-Certified Surgeons" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Board-Certified Excellence",
    description:
      "Our surgeons are fellowship-trained specialists dedicated to the highest standards of safety and clinical outcomes.",
  },
  {
    icon: Stethoscope,
    title: "State-of-the-Art Technology",
    description:
      "3D imaging, digital surgical planning, and modern techniques ensure precision, predictability, and faster recovery.",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "Surgery can be daunting. Our entire team is dedicated to a warm, reassuring environment tailored to your comfort.",
  },
];

const procedures = [
  { name: "Dental Implants", path: "/procedures" },
  { name: "Wisdom Teeth Removal", path: "/procedures" },
  { name: "Bone Grafting", path: "/procedures" },
  { name: "Corrective Jaw Surgery", path: "/procedures" },
  { name: "Facial Trauma", path: "/procedures" },
  { name: "Oral Pathology", path: "/procedures" },
];

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "The team at AMP made me feel completely at ease. My implant procedure was smooth, and the recovery was faster than I expected. I can't say enough good things.",
  },
  {
    name: "James T.",
    rating: 5,
    text: "I was terrified of oral surgery, but they walked me through everything. The staff is warm, professional, and genuinely caring. Highly recommend.",
  },
  {
    name: "Linda R.",
    rating: 5,
    text: "From consultation to follow-up, every step was handled with expertise and kindness. Best surgical experience I've ever had.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <title>AMP Oral Surgery | Expert Oral & Maxillofacial Care</title>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[82vh] flex items-end overflow-hidden bg-slate-900">
        <img
          src={heroBgImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/20 to-transparent" />
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="glow-blob bg-primary/40 w-[420px] h-[420px] -top-20 -left-20" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-20 pt-28">
          <Reveal y={20} className="max-w-2xl text-white space-y-6">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md"
              data-testid="badge-accepting-patients"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Now Accepting New Patients
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.05] tracking-tight text-white">
              Expert Surgical Care.{" "}
              <span className="text-gradient">Exceptional Comfort.</span>
            </h1>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl">
              State-of-the-art oral and maxillofacial surgery delivered by board-certified
              specialists who put your well-being first — every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                asChild
                className="rounded-full font-semibold px-7 shadow-glow-soft hover:shadow-glow transition-shadow"
                data-testid="button-hero-request"
              >
                <Link href="/contact">Request an Appointment</Link>
              </Button>
              <Button
                size="lg"
                asChild
                className="rounded-full font-semibold px-7 bg-white/95 text-slate-900 hover:bg-white backdrop-blur-sm"
                data-testid="button-hero-procedures"
              >
                <Link href="/procedures">
                  Our Procedures <ArrowRight className="ml-1.5" size={16} />
                </Link>
              </Button>
            </div>

            <a
              href="tel:4075440139"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mt-2"
              data-testid="link-hero-phone"
            >
              <Phone size={15} />
              <span>407-544-0139 — Mon–Sat, 8 AM–4 PM</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className="py-8 px-6 text-center"
              >
                <div data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <p className="text-3xl md:text-4xl font-bold font-display text-gradient inline-block">{s.value}</p>
                  <p className="text-slate-500 text-sm mt-1">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal className="space-y-8">
              <div>
                <span className="inline-flex items-center rounded-full bg-blue-50 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase ring-1 ring-blue-100">
                  Why AMP Oral Surgery
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight mt-4 mb-5">
                  Surgery you can trust.<br />Care you can feel.
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We combine fellowship-level surgical expertise with a team that genuinely cares
                  about the person behind the procedure. Our patients aren't cases — they're people
                  we're honored to help.
                </p>
              </div>

              <div className="space-y-4">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="flex gap-5 items-start group rounded-xl p-3 -mx-3 hover:bg-slate-50 transition-colors"
                    data-testid={`feature-${f.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="bg-gradient-to-br from-primary to-accent text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow-soft group-hover:scale-105 transition-transform">
                      <f.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-base mb-1">{f.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="rounded-full font-semibold px-6"
                data-testid="button-about-us"
              >
                <Link href="/about">
                  Meet Our Team <ArrowRight className="ml-1.5" size={15} />
                </Link>
              </Button>
            </Reveal>

            {/* Right: image collage */}
            <Reveal delay={0.15} className="relative">
              <div className="glow-blob bg-accent/30 w-72 h-72 -bottom-10 -right-10" />
              <div className="relative grid grid-cols-2 gap-4 h-[520px]">
                <div className="rounded-2xl overflow-hidden row-span-2 ring-frame">
                  <img src={heroImg} alt="Oral surgery care" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden ring-frame">
                  <img src={consultationImg} alt="Patient consultation" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-6 text-center text-white shadow-lifted bg-grid-dark">
                  <div>
                    <p className="text-4xl font-bold font-display">98%</p>
                    <p className="text-slate-400 text-sm mt-1">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PROCEDURES OVERVIEW ─────────────────────────────── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="inline-flex items-center rounded-full bg-white text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase ring-1 ring-blue-100 shadow-soft">
                What We Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight mt-4">
                Procedures We Provide
              </h2>
            </div>
            <Button
              asChild
              className="rounded-full flex-shrink-0 bg-slate-900 text-white hover:bg-slate-800 font-semibold px-6"
              data-testid="button-view-all-procedures"
            >
              <Link href="/procedures">
                View All <ArrowRight className="ml-1.5" size={15} />
              </Link>
            </Button>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {procedures.map((proc, i) => (
              <Reveal key={proc.name} delay={(i % 3) * 0.08}>
                <Link
                  href={proc.path}
                  data-testid={`card-proc-home-${i}`}
                  className="group bg-white border border-slate-200/70 rounded-2xl px-6 py-5 flex items-center justify-between shadow-soft hover:shadow-lifted hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
                >
                  <span className="font-medium text-slate-800 group-hover:text-primary transition-colors text-sm">
                    {proc.name}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-primary flex items-center justify-center transition-colors">
                    <ArrowRight size={15} className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal className="relative">
              <div className="absolute -top-5 -left-5 w-28 h-28 rounded-2xl border-2 border-primary/20 hidden md:block" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[580px] ring-frame">
                <img src={aboutImg} alt="Surgical team at AMP Oral Surgery" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white shadow-lifted max-w-[200px]">
                <p className="text-xs text-slate-400 mb-1">Trusted by</p>
                <p className="text-3xl font-bold font-display">5,000+</p>
                <p className="text-xs text-slate-400 mt-1">patients in our community</p>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="space-y-5">
              <span className="inline-flex items-center rounded-full bg-blue-50 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase ring-1 ring-blue-100">
                About AMP Oral Surgery
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight">
                Compassionate Care,<br />Trusted Expertise.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                AMP Oral Surgery was founded to bring fellowship-trained, hospital-level expertise
                to patients in a welcoming, community-focused environment.
              </p>
              <p className="text-slate-500 leading-relaxed text-sm">
                We take time with every patient — to listen, explain, and build a treatment plan
                that fits your needs, your timeline, and your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild className="rounded-full font-semibold px-6" data-testid="button-learn-more-about">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
                <Button asChild className="rounded-full font-semibold px-6 bg-slate-900 text-white hover:bg-slate-800" data-testid="button-new-patients">
                  <Link href="/new-patients">New Patient Info</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center rounded-full bg-white text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase ring-1 ring-blue-100 shadow-soft">
              Patient Stories
            </span>
            <h2 className="text-4xl font-bold font-display text-slate-900 mt-4 mb-3">
              What Our Patients Say
            </h2>
            <p className="text-slate-500 text-base">
              Hear from the people whose care we're most proud of.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  data-testid={`card-testimonial-${i}`}
                  className="bg-white rounded-2xl p-7 border border-slate-200/70 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 h-full relative"
                >
                  <Quote className="absolute top-6 right-6 text-slate-100" size={40} />
                  <div className="flex mb-4 relative">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm italic mb-6 relative">"{t.text}"</p>
                  <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs font-display">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                      <p className="text-slate-400 text-xs">Verified Patient</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="glow-blob bg-primary/50 w-[460px] h-[460px] -top-32 left-1/2 -translate-x-1/2" />
        <Reveal className="container mx-auto px-4 lg:px-8 text-center max-w-3xl relative">
          <span className="inline-flex items-center rounded-full bg-white/10 border border-white/15 text-white px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white leading-tight mb-5">
            Ready to restore your smile and health?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Contact our office today to schedule your consultation and discuss your treatment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild className="rounded-full font-semibold px-7 shadow-glow-soft hover:shadow-glow transition-shadow" data-testid="button-cta-schedule">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button size="lg" asChild className="rounded-full font-semibold px-7 bg-white text-slate-900 hover:bg-slate-100" data-testid="button-cta-procedures">
              <Link href="/procedures">View Our Procedures</Link>
            </Button>
          </div>
          <a href="tel:4075440139" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mt-6">
            <Phone size={14} />
            <span>Or call us at 407-544-0139</span>
          </a>
        </Reveal>
      </section>
    </div>
  );
}
