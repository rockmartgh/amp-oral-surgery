import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, BookOpen, Users, ArrowRight } from "lucide-react";

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

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <title>About Us | AMP Oral Surgery</title>

      {/* Hero */}
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-white border border-slate-200 text-slate-500 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight mt-4 mb-4">
            About AMP Oral Surgery
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
            Founded on the belief that exceptional surgical care and genuine compassion are
            inseparable, AMP Oral Surgery has served our community with integrity, skill, and heart.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-500 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
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
                to making your experience as smooth and reassuring as possible. We explain every step,
                answer every question, and never rush you through a decision.
              </p>
              <p className="text-slate-500 leading-relaxed text-sm">
                Whether you're coming in for a wisdom tooth removal or a complex jaw reconstruction,
                you will receive the same level of attentive, personalized care. That's the AMP
                commitment.
              </p>
            </div>
            <div className="relative">
              <div className="bg-slate-100 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-slate-400 p-8">
                  <p className="font-medium text-slate-500">Practice Photo</p>
                  <p className="text-sm mt-1">(Photo coming soon)</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-primary text-white rounded-xl p-5 shadow-lg">
                <p className="text-3xl font-bold font-display">15+</p>
                <p className="text-xs text-blue-200 mt-1">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center rounded-full bg-white border border-slate-200 text-slate-500 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
              What Guides Us
            </span>
            <h2 className="text-4xl font-bold font-display text-slate-900 mt-4 mb-3">Our Core Values</h2>
            <p className="text-slate-500">
              These aren't just words on a wall. They shape every interaction we have with our patients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                data-testid={`card-value-${i}`}
                className="bg-white rounded-xl p-7 border border-slate-200 hover:shadow-sm transition-all"
              >
                <div className="bg-blue-50 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                  <v.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-500 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
              The People Behind Your Care
            </span>
            <h2 className="text-4xl font-bold font-display text-slate-900 mt-4 mb-3">Meet Our Team</h2>
            <p className="text-slate-500">
              Our surgeons and staff are united by a passion for oral health and a commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((doctor, i) => (
              <div
                key={doctor.name}
                data-testid={`card-doctor-${i}`}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-sm transition-all"
              >
                <div className="bg-slate-100 h-44 flex items-center justify-center">
                  <div className="text-center text-slate-400">
                    <p className="text-xs font-medium">Photo Coming Soon</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-slate-900 font-display">{doctor.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{doctor.title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{doctor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
            Ready to meet our team?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Schedule your consultation and experience the AMP Oral Surgery difference firsthand.
          </p>
          <Button
            size="lg"
            asChild
            className="font-medium px-6 gap-1.5"
          >
            <Link href="/contact" data-testid="button-contact-about">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
