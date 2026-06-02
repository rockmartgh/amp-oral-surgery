import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldCheck, Heart, Stethoscope, ArrowRight, Star, Phone } from "lucide-react";
import heroImg from "@assets/hero-surgery.png";
import aboutImg from "@assets/about-team.png";
import img3 from "@assets/image_1780383963309.png";
import img4 from "@assets/image_1780384029302.png";

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
      <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-slate-900">
        <img
          src={heroImg}
          alt="Oral surgery care"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-60"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-transparent to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-20 pt-36">
          <div className="max-w-2xl text-white space-y-6">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-sm"
              data-testid="badge-accepting-patients"
            >
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              Now Accepting New Patients
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.05] tracking-tight">
              Expert Surgical Care.{" "}
              <span className="text-blue-400">Exceptional Comfort.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
              State-of-the-art oral and maxillofacial surgery delivered by board-certified
              specialists who put your well-being first — every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                asChild
                className="rounded-full text-base font-semibold px-8 py-6 shadow-lg shadow-blue-900/40"
                data-testid="button-hero-request"
              >
                <Link href="/contact">Request an Appointment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full text-base font-semibold px-8 py-6 bg-white/10 border-white/25 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
                data-testid="button-hero-procedures"
              >
                <Link href="/procedures">
                  Our Procedures <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>

            {/* Quick contact */}
            <a
              href="tel:5558675309"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mt-2"
              data-testid="link-hero-phone"
            >
              <Phone size={16} />
              <span>(555) 867-5309 — Mon–Fri, 8 AM–5 PM</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-blue-400/30">
            {stats.map((s) => (
              <div
                key={s.label}
                className="py-8 px-6 text-center"
                data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <p className="text-3xl md:text-4xl font-bold font-display text-white">{s.value}</p>
                <p className="text-blue-200 text-sm mt-1">{s.label}</p>
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
                <p className="text-blue-500 font-semibold tracking-widest text-xs uppercase mb-4">
                  Why AMP Oral Surgery
                </p>
                <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight mb-6">
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
                    <div className="bg-blue-100 text-primary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <f.icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-1">{f.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="rounded-full font-semibold px-7"
                data-testid="button-about-us"
              >
                <Link href="/about">
                  Meet Our Team <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>

            {/* Right: image collage */}
            <div className="relative grid grid-cols-2 gap-4 h-[520px]">
              <div className="rounded-2xl overflow-hidden row-span-2">
                <img
                  src={img3}
                  alt="Oral surgery care"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={img4}
                  alt="Patient consultation"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-primary flex items-center justify-center p-6 text-center text-white">
                <div>
                  <p className="text-4xl font-bold font-display">98%</p>
                  <p className="text-blue-200 text-sm mt-1">Patient Satisfaction</p>
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
              <p className="text-blue-500 font-semibold tracking-widest text-xs uppercase mb-4">
                What We Offer
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight">
                Procedures We Provide
              </h2>
            </div>
            <Button
              variant="outline"
              asChild
              className="rounded-full flex-shrink-0"
              data-testid="button-view-all-procedures"
            >
              <Link href="/procedures">
                View All Procedures <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {procedures.map((proc, i) => (
              <Link
                key={proc.name}
                href={proc.path}
                data-testid={`card-proc-home-${i}`}
                className="group bg-white border border-slate-100 rounded-2xl px-7 py-6 flex items-center justify-between shadow-sm hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="font-semibold text-slate-800 group-hover:text-primary transition-colors">
                  {proc.name}
                </span>
                <ArrowRight
                  size={18}
                  className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all"
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
              <div className="rounded-3xl overflow-hidden aspect-[4/5] max-h-[600px]">
                <img
                  src={aboutImg}
                  alt="Surgical team at AMP Oral Surgery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#0B1A30] rounded-2xl p-6 text-white shadow-xl max-w-[220px]">
                <p className="text-sm text-slate-400 mb-1">Trusted by</p>
                <p className="text-3xl font-bold font-display">5,000+</p>
                <p className="text-sm text-blue-300">patients in our community</p>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <p className="text-blue-500 font-semibold tracking-widest text-xs uppercase">
                About AMP Oral Surgery
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight">
                Compassionate Care, Trusted Expertise.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                AMP Oral Surgery was founded to bring fellowship-trained, hospital-level expertise
                to patients in a welcoming, community-focused environment. Our board-certified
                surgeons have decades of combined experience across the full spectrum of oral and
                maxillofacial surgery.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We take time with every patient — to listen, explain, and build a treatment plan
                that fits your needs, your timeline, and your life. You will never feel like a
                number here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  asChild
                  className="rounded-full font-semibold px-7"
                  data-testid="button-learn-more-about"
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="rounded-full font-semibold px-7"
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
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-blue-500 font-semibold tracking-widest text-xs uppercase mb-4">
              Patient Stories
            </p>
            <h2 className="text-4xl font-bold font-display text-slate-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-slate-600 text-lg">
              Hear from the people whose care we're most proud of.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                data-testid={`card-testimonial-${i}`}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed text-sm italic mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm font-display">
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
      <section className="relative py-28 overflow-hidden bg-[#0B1A30]">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A30] via-[#0B1A30]/90 to-[#0B1A30]/80" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white leading-tight mb-6">
            Ready to restore your smile and health?
          </h2>
          <p className="text-slate-300 text-xl mb-10">
            Contact our office today to schedule your consultation and discuss your treatment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="rounded-full bg-white text-primary hover:bg-slate-100 text-base font-semibold px-8 py-6"
              data-testid="button-cta-schedule"
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white text-base font-semibold px-8 py-6"
              data-testid="button-cta-procedures"
            >
              <Link href="/procedures">View Our Procedures</Link>
            </Button>
          </div>
          <a
            href="tel:5558675309"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mt-8"
          >
            <Phone size={15} />
            <span>Or call us at (555) 867-5309</span>
          </a>
        </div>
      </section>
    </div>
  );
}
