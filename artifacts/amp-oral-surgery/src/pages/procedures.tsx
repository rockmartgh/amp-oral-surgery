import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const procedures = [
  {
    name: "Dental Implants",
    description:
      "Dental implants are the gold standard for replacing missing teeth. Using titanium posts surgically placed into the jawbone, implants provide a permanent, natural-looking foundation for crowns, bridges, or dentures. Our surgeons plan every implant case with 3D imaging for precision placement and long-lasting results.",
    benefits: ["Permanent tooth replacement", "Preserves jawbone", "Natural look and feel"],
  },
  {
    name: "Wisdom Teeth Removal",
    description:
      "Impacted or problematic wisdom teeth can cause pain, infection, and damage to adjacent teeth. We offer comfortable wisdom tooth extractions — from simple removal to complex surgical cases — using IV sedation options to ensure a relaxed, pain-free experience.",
    benefits: ["Prevents crowding & infection", "Sedation available", "Expert surgical technique"],
  },
  {
    name: "Bone Grafting",
    description:
      "Bone grafting restores lost jawbone density needed for implant placement or to preserve facial structure. Using advanced grafting materials, we rebuild the bone foundation so you can benefit from implants and maintain a healthy bite and appearance.",
    benefits: ["Enables implant placement", "Restores facial structure", "Advanced materials used"],
  },
  {
    name: "Corrective Jaw Surgery",
    description:
      "Orthognathic surgery corrects jaw irregularities that affect chewing, speaking, breathing, and facial balance. Working in coordination with your orthodontist, we precisely reposition the upper and/or lower jaw to create proper alignment and harmony.",
    benefits: ["Improves function & aesthetics", "Coordinated orthodontic care", "Long-term results"],
  },
  {
    name: "Facial Trauma",
    description:
      "Injuries to the face, jaw, and surrounding structures require immediate, expert attention. Our surgeons are trained in the management of facial fractures, lacerations, and dental injuries — providing reconstructive care to restore both form and function.",
    benefits: ["Emergency care available", "Reconstructive expertise", "Comprehensive management"],
  },
  {
    name: "Oral Pathology",
    description:
      "Early detection of oral diseases — including cysts, tumors, and pre-cancerous lesions — is critical. We perform biopsies and surgical treatment of oral pathology, working closely with your healthcare team to ensure the best possible outcomes.",
    benefits: ["Early detection & biopsy", "Collaborative care", "Comprehensive evaluation"],
  },
  {
    name: "Tooth Extractions",
    description:
      "When a tooth cannot be saved, our team performs gentle extractions with minimal discomfort. We offer multiple sedation options and discuss tooth replacement solutions — such as implants or bridges — to plan for a healthy, complete smile.",
    benefits: ["Comfortable procedure", "Multiple sedation options", "Replacement planning"],
  },
  {
    name: "Platelet Rich Fibrin (PRF)",
    description:
      "PRF is an innovative biological therapy derived from your own blood. Concentrated growth factors are applied to surgical sites to accelerate healing, reduce swelling, and improve outcomes after extractions, grafts, and implant procedures.",
    benefits: ["Natural healing acceleration", "Reduced swelling & pain", "Improved surgical outcomes"],
  },
  {
    name: "Cleft Lip & Palate",
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
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-white border border-slate-200 text-slate-500 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight mt-4 mb-4">
            Our Procedures
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
            From complex reconstructive surgery to routine extractions, AMP Oral Surgery provides
            the full spectrum of oral and maxillofacial care — delivered with precision, technology,
            and genuine compassion.
          </p>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((proc, i) => (
              <div
                key={proc.name}
                data-testid={`card-procedure-${i}`}
                className="bg-white rounded-xl p-7 border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
            Have questions about a procedure?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Contact our office to schedule a consultation. We'll evaluate your needs and walk you
            through the best treatment options.
          </p>
          <Button
            size="lg"
            asChild
            className="font-medium px-6 gap-1.5"
          >
            <Link href="/contact" data-testid="button-request-consultation">
              Request a Consultation <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
