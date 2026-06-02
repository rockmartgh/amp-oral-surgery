import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldCheck, Heart, Stethoscope, ArrowRight, Star, Phone } from "lucide-react";
import heroImg from "@assets/hero-surgery.png";
import aboutImg from "@assets/about-team.png";

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
      <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-slate-900">
        <img
          src={heroImg}
          alt="Oral surgery care"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/55 to-slate-900/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-transparent to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-20 pt-36">
          <div className="max-w-2xl text-white space-y-6">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
              data-testid="badge-accepting-patients"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Now Accepting New Patients
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.05] tracking-tight text-white">
              Expert Surgical Care.{" "}
              <span className="text-blue-300">Exceptional Comfort.</span>
            </h1>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl">
              State-of-the-art oral and maxillofacial surgery delivered by board-certified
              specialists who put your well-being first — every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                asChild
                className="font-semibold px-6"
                data-testid="button-hero-request"
              >
                <Link href="/contact">Request an Appointment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="font-semibold px-6 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
                data-testid="button-hero-procedures"
              >
                <Link href="/procedures">
                  Our Procedures <ArrowRight className="ml-1.5" size={16} />
                </Link>
              </Button>
            </div>

            <a
              href="tel:5558675309"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mt-2"
              data-testid="link-hero-phone"
            >
              <Phone size={15} />
              <span>(555) 867-5309 — Mon–Fri, 8 AM–5 PM</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100">
            {stats.map((s) => (
              <div
                key={s.label}
                className="py-7 px-6 text-center"
                data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <p className="text-3xl md:text-4xl font-bold font-display text-primary">{s.value}</p>
                <p className="text-slate-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div className="space-y-8">
              <div>
                <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-500 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
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

              <div className="space-y-6">
                {features.map((f) => (
                  <div key={f.title} className="flex gap-5 items-start" data-testid={`feature-${f.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="bg-blue-50 text-primary w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0">
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
                className="font-medium gap-1.5"
                data-testid="button-about-us"
              >
                <Link href="/about">
                  Meet Our Team <ArrowRight size={15} />
                </Link>
              </Button>
            </div>

            {/* Right: image collage */}
            <div className="relative grid grid-cols-2 gap-4 h-[500px]">
              <div className="rounded-2xl overflow-hidden row-span-2">
                <img
                  src={heroImg}
                  alt="Oral surgery care"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={aboutImg}
                  alt="Patient consultation"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="rounded-2xl bg-slate-900 flex items-center justify-center p-6 text-center text-white">
                <div>
                  <p className="text-4xl font-bold font-display">98%</p>
                  <p className="text-slate-400 text-sm mt-1">Patient Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCEDURES OVERVIEW ─────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="inline-flex items-center rounded-full bg-white border border-slate-200 text-slate-500 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                What We Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight mt-4">
                Procedures We Provide
              </h2>
            </div>
            <Button
              variant="outline"
              asChild
              className="flex-shrink-0 font-medium gap-1.5"
              data-testid="button-view-all-procedures"
            >
              <Link href="/procedures">
                View All <ArrowRight size={15} />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {procedures.map((proc, i) => (
              <Link
                key={proc.name}
                href={proc.path}
                data-testid={`card-proc-home-${i}`}
                className="group bg-white border border-slate-200 rounded-xl px-6 py-5 flex items-center justify-between hover:border-primary/40 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="font-medium text-slate-800 group-hover:text-primary transition-colors text-sm">
                  {proc.name}
                </span>
                <ArrowRight
                  size={16}
                  className="text-slate-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] max-h-[580px]">
                <img
                  src={aboutImg}
                  alt="Surgical team at AMP Oral Surgery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-slate-900 rounded-xl p-5 text-white shadow-lg max-w-[200px]">
                <p className="text-xs text-slate-400 mb-1">Trusted by</p>
                <p className="text-3xl font-bold font-display">5,000+</p>
                <p className="text-xs text-slate-400 mt-1">patients in our community</p>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-5">
              <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-500 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                About AMP Oral Surgery
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight">
                Compassionate Care,<br />Trusted Expertise.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                AMP Oral Surgery was founded to bring fellowship-trained, hospital-level expertise
                to patients in a welcoming, community-focused environment. Our board-certified
                surgeons have decades of combined experience across the full spectrum of oral and
                maxillofacial surgery.
              </p>
              <p className="text-slate-500 leading-relaxed text-sm">
                We take time with every patient — to listen, explain, and build a treatment plan
                that fits your needs, your timeline, and your life. You will never feel like a
                number here.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  asChild
                  className="font-medium"
                  data-testid="button-learn-more-about"
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="font-medium"
                  data-testid="button-new-patients"
                >
                  <Link href="/new-patients">New Patient Info</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center rounded-full bg-white border border-slate-200 text-slate-500 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
              Patient Stories
            </span>
            <h2 className="text-4xl font-bold font-display text-slate-900 mt-4 mb-3">
              What Our Patients Say
            </h2>
            <p className="text-slate-500 text-base">
              Hear from the people whose care we're most proud of.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                data-testid={`card-testimonial-${i}`}
                className="bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-md transition-all"
              >
                <div className="flex mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed text-sm italic mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-xs font-display">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">Verified Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-500 px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-6">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight mb-5">
            Ready to restore your smile and health?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Contact our office today to schedule your consultation and discuss your treatment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              asChild
              className="font-medium px-6"
              data-testid="button-cta-schedule"
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="font-medium px-6"
              data-testid="button-cta-procedures"
            >
              <Link href="/procedures">View Our Procedures</Link>
            </Button>
          </div>
          <a
            href="tel:5558675309"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors text-sm mt-6"
          >
            <Phone size={14} />
            <span>Or call us at (555) 867-5309</span>
          </a>
        </div>
      </section>
    </div>
  );
}
