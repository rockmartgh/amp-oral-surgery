import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const procedures = [
  {
    name: "Dental Implants",
    icon: "🦷",
    description:
      "Dental implants are the gold standard for replacing missing teeth. Using titanium posts surgically placed into the jawbone, implants provide a permanent, natural-looking foundation for crowns, bridges, or dentures. Our surgeons plan every implant case with 3D imaging for precision placement and long-lasting results.",
    benefits: ["Permanent tooth replacement", "Preserves jawbone", "Natural look and feel"],
  },
  {
    name: "Wisdom Teeth Removal",
    icon: "✦",
    description:
      "Impacted or problematic wisdom teeth can cause pain, infection, and damage to adjacent teeth. We offer comfortable wisdom tooth extractions — from simple removal to complex surgical cases — using IV sedation options to ensure a relaxed, pain-free experience.",
    benefits: ["Prevents crowding & infection", "Sedation available", "Expert surgical technique"],
  },
  {
    name: "Bone Grafting",
    icon: "◈",
    description:
      "Bone grafting restores lost jawbone density needed for implant placement or to preserve facial structure. Using advanced grafting materials, we rebuild the bone foundation so you can benefit from implants and maintain a healthy bite and appearance.",
    benefits: ["Enables implant placement", "Restores facial structure", "Advanced materials used"],
  },
  {
    name: "Corrective Jaw Surgery",
    icon: "◉",
    description:
      "Orthognathic surgery corrects jaw irregularities that affect chewing, speaking, breathing, and facial balance. Working in coordination with your orthodontist, we precisely reposition the upper and/or lower jaw to create proper alignment and harmony.",
    benefits: ["Improves function & aesthetics", "Coordinated orthodontic care", "Long-term results"],
  },
  {
    name: "Facial Trauma",
    icon: "◐",
    description:
      "Injuries to the face, jaw, and surrounding structures require immediate, expert attention. Our surgeons are trained in the management of facial fractures, lacerations, and dental injuries — providing reconstructive care to restore both form and function.",
    benefits: ["Emergency care available", "Reconstructive expertise", "Comprehensive management"],
  },
  {
    name: "Oral Pathology",
    icon: "◑",
    description:
      "Early detection of oral diseases — including cysts, tumors, and pre-cancerous lesions — is critical. We perform biopsies and surgical treatment of oral pathology, working closely with your healthcare team to ensure the best possible outcomes.",
    benefits: ["Early detection & biopsy", "Collaborative care", "Comprehensive evaluation"],
  },
  {
    name: "Tooth Extractions",
    icon: "✧",
    description:
      "When a tooth cannot be saved, our team performs gentle extractions with minimal discomfort. We offer multiple sedation options and discuss tooth replacement solutions — such as implants or bridges — to plan for a healthy, complete smile.",
    benefits: ["Comfortable procedure", "Multiple sedation options", "Replacement planning"],
  },
  {
    name: "Platelet Rich Fibrin (PRF)",
    icon: "◇",
    description:
      "PRF is an innovative biological therapy derived from your own blood. Concentrated growth factors are applied to surgical sites to accelerate healing, reduce swelling, and improve outcomes after extractions, grafts, and implant procedures.",
    benefits: ["Natural healing acceleration", "Reduced swelling & pain", "Improved surgical outcomes"],
  },
  {
    name: "Cleft Lip & Palate",
    icon: "◈",
    description:
      "We provide compassionate surgical management of cleft lip and palate conditions. Our team coordinates with multidisciplinary specialists to deliver comprehensive, staged care — helping patients and families navigate treatment with confidence and support.",
    benefits: ["Multidisciplinary coordination", "Staged treatment planning", "Family-centered care"],
  },
];

export default function Procedures() {
  return (
    <div className="flex flex-col w-full">
      <title>Procedures | AMP Oral Surgery</title>

      {/* Page Hero */}
      <section className="bg-[#0B1A30] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold tracking-widest text-xs uppercase mb-4">
              What We Offer
            </p>
            <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight mb-6">
              Our Procedures
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              From complex reconstructive surgery to routine extractions, AMP Oral Surgery provides
              the full spectrum of oral and maxillofacial care — delivered with precision, technology,
              and genuine compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedures.map((proc, i) => (
              <div
                key={proc.name}
                data-testid={`card-procedure-${i}`}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="text-3xl mb-4 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl text-primary">
                  <span className="text-xl">{proc.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{proc.name}</h3>
                <p className="text-slate-600 leading-relaxed text-sm flex-1">{proc.description}</p>
                <ul className="mt-6 space-y-2">
                  {proc.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Have questions about a procedure?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact our office to schedule a consultation. We'll evaluate your needs and walk you
            through the best treatment options.
          </p>
          <Button
            size="lg"
            asChild
            className="rounded-full bg-white text-primary hover:bg-slate-100 text-base font-semibold px-8 py-6"
          >
            <Link href="/contact" data-testid="button-request-consultation">
              Request a Consultation <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
