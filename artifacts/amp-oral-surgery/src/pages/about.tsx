import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, BookOpen, Users, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import aboutTeamImg from "@assets/office-team.jpg";
import consultationImg from "@assets/office-consultation.jpg";

const values = [
  {
    icon: Award,
    title: "Clinical Excellence",
    description:
      "Our surgeons hold board certifications in Oral and Maxillofacial Surgery, backed by years of hospital-based training and a commitment to continued education.",
  },
  {
    icon: Users,
    title: "Patient-Centered Care",
    description:
      "Every treatment plan is personalized. We take the time to listen, explain your options clearly, and support you from your first consultation through full recovery.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Medicine advances rapidly. Our team actively participates in professional development, research, and training to bring the latest techniques to every patient.",
  },
];

const team = [
  {
    name: "Dr. A. Mitchell, D.D.S., M.D.",
    title: "Oral & Maxillofacial Surgeon",
    bio: "Board-certified specialist with over 15 years of experience in complex oral surgery, implantology, and jaw reconstruction.",
  },
  {
    name: "Dr. M. Patel, D.D.S.",
    title: "Oral & Maxillofacial Surgeon",
    bio: "Specializing in dental implants, wisdom teeth management, and facial trauma. Dedicated to patient-centered outcomes.",
  },
  {
    name: "Dr. P. Rosenberg, D.D.S.",
    title: "Oral & Maxillofacial Surgeon",
    bio: "Expert in orthognathic surgery and cleft lip/palate treatment with fellowship training from a leading academic medical center.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <title>About Us | AMP Oral Surgery</title>

      {/* Hero — full-bleed background */}
      <section className="relative min-h-[58vh] overflow-hidden bg-slate-900">
        <img
          src={aboutTeamImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/65 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-white" />
        <div className="absolute inset-0 bg-grid-dark opacity-25" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-36 pb-32">
          <Reveal y={20} className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 text-white px-3 py-1 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mt-4 mb-4">
              About AMP Oral Surgery
            </h1>
            <p className="text-slate-200 text-lg leading-relaxed max-w-xl">
              Founded on the belief that exceptional surgical care and genuine compassion are
              inseparable, AMP Oral Surgery has served our community with integrity, skill, and heart.
            </p>
            <Button asChild className="rounded-full font-semibold px-7 mt-8 shadow-glow-soft hover:shadow-glow transition-shadow" size="lg">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal className="space-y-5">
              <span className="inline-flex items-center rounded-full bg-blue-50 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase ring-1 ring-blue-100">
                Our Mission
              </span>
              <h2 className="text-4xl font-bold font-display text-slate-900 leading-tight">
                Surgery you can trust. Care you can feel.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                AMP Oral Surgery was established to bring fellowship-trained, hospital-level oral
                surgery expertise directly to the patients who need it most — in an environment
                designed for comfort, transparency, and trust.
              </p>
              <p className="text-slate-500 leading-relaxed text-sm">
                We understand that undergoing surgery can be stressful. That's why every member of
                our team — from our front desk staff to our board-certified surgeons — is dedicated
                to making your experience as smooth and reassuring as possible.
              </p>
              <p className="text-slate-500 leading-relaxed text-sm">
                Whether you're coming in for a wisdom tooth removal or a complex jaw reconstruction,
                you will receive the same level of attentive, personalized care. That's the AMP
                commitment.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] ring-frame">
                <img
                  src={consultationImg}
                  alt="Surgeon with patient"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 md:-left-6 bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-5 shadow-glow">
                <p className="text-3xl font-bold font-display">15+</p>
                <p className="text-xs text-blue-100 mt-1">Years of Experience</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center rounded-full bg-white text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase ring-1 ring-blue-100 shadow-soft">
              What Guides Us
            </span>
            <h2 className="text-4xl font-bold font-display text-slate-900 mt-4 mb-3">Our Core Values</h2>
            <p className="text-slate-500">
              These aren't just words on a wall. They shape every interaction we have with our patients.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div
                  data-testid={`card-value-${i}`}
                  className="bg-white rounded-2xl p-7 border border-slate-200/70 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 h-full group"
                >
                  <div className="bg-gradient-to-br from-primary to-accent text-white w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-glow-soft group-hover:scale-105 transition-transform">
                    <v.icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">{v.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center rounded-full bg-blue-50 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase ring-1 ring-blue-100">
              The People Behind Your Care
            </span>
            <h2 className="text-4xl font-bold font-display text-slate-900 mt-4 mb-3">Meet Our Team</h2>
            <p className="text-slate-500">
              Our surgeons and staff are united by a passion for oral health and a commitment to excellence.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((doctor, i) => (
              <Reveal key={doctor.name} delay={i * 0.1}>
                <div
                  data-testid={`card-doctor-${i}`}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/70 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-48 flex items-center justify-center bg-grid">
                    <p className="text-xs font-medium text-slate-400">Photo Coming Soon</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold text-slate-900 font-display">{doctor.name}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{doctor.title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{doctor.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="glow-blob bg-primary/50 w-[460px] h-[460px] -top-32 left-1/2 -translate-x-1/2" />
        <Reveal className="container mx-auto px-4 lg:px-8 text-center max-w-3xl relative">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
            Ready to meet our team?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Schedule your consultation and experience the AMP Oral Surgery difference firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild className="rounded-full font-semibold px-7 shadow-glow-soft hover:shadow-glow transition-shadow" data-testid="button-contact-about">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-1.5" size={16} />
              </Link>
            </Button>
            <Button size="lg" asChild className="rounded-full font-semibold px-7 bg-white text-slate-900 hover:bg-slate-100">
              <Link href="/procedures">Our Procedures</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
