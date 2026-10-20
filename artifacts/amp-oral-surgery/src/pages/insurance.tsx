import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, CreditCard, ArrowRight, CheckCircle2, ClipboardList } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import receptionImg from "@assets/office-lounge.jpg";

const whyAMP = [
  "Efficiency in every procedure",
  "Compassionate client service",
  "Close collaboration with referring dentists",
  "Highly personalized approach",
  "Focus on client comfort",
  "Long-standing reputation for quality",
];

const dentalPlans = [
  "Anthem / Unicare / Wellpoint",
  "Argus",
  "BCBS BlueDental Choice PPO",
  "BCBS BlueDental Copayment PPO",
  "BCBS Federal Employee Program (FEP)",
  "Careington Platinum PPO",
  "Careington Care PPO",
  "Cigna Advantage",
  "Delta Dental PPO",
  "Delta Dental Premier",
  "Dentegra",
  "Humana",
  "MetLife PPO",
  "Premier Dental Group",
  "Sun Life / DHA",
  "United Concordia ADDP",
  "United Concordia TOP",
  "United Concordia National Advantage / NFFS",
  "UnitedHealthcare",
  "Zelis",
];

const medicarePlans = ["Humana", "UnitedHealthcare PPO"];

const paymentOptions = [
  {
    title: "CareCredit",
    description:
      "CareCredit is a healthcare credit card offering flexible financing options — including interest-free periods — to help cover the cost of your treatment over time.",
  },
  {
    title: "In-House Payment Plans",
    description:
      "We understand that oral surgery can represent a significant investment. Ask our financial coordinator about customized in-house payment arrangements.",
  },
  {
    title: "All Major Credit Cards",
    description:
      "We accept Visa, Mastercard, American Express, and Discover for your convenience.",
  },
  {
    title: "Cash & Check",
    description:
      "Traditional payment methods are always welcome at our office.",
  },
];

export default function Insurance() {
  return (
    <div className="flex flex-col w-full">
      <title>Insurance & Billing | AMP Oral Surgery</title>

      {/* Hero — full-bleed background */}
      <section className="relative min-h-[58vh] overflow-hidden bg-slate-900">
        <img
          src={receptionImg}
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
              Billing & Coverage
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mt-4 mb-4">
              Insurance & Financing
            </h1>
            <p className="text-slate-200 text-lg leading-relaxed max-w-xl">
              We work with most major dental and medical insurance plans and offer flexible payment
              options to make your care as affordable as possible.
            </p>
            <Button asChild className="rounded-full font-semibold px-7 mt-8 shadow-glow-soft hover:shadow-glow transition-shadow" size="lg">
              <Link href="/contact">Contact Our Billing Team</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="accepted-plans-heading" className="py-16 bg-white border-b border-slate-300">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 id="accepted-plans-heading" className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-5">Insurance Plans</h2>
          <p className="text-slate-700 max-w-3xl mb-10 leading-relaxed">Our participating plans are listed below. Benefits, network participation, and coverage depend on your specific plan and procedure. Please contact our billing team and your insurer to verify your benefits before treatment. A listed plan does not guarantee coverage or payment.</p>
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
            <div className="border-t-4 border-primary pt-5">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">Participating PPO / Dental Plans</h3>
              <ul className="grid md:grid-cols-2 gap-x-8 text-base text-slate-900" data-testid="dental-plans">
                {dentalPlans.map((plan) => <li key={plan} className="py-3 border-b border-slate-300 leading-relaxed">{plan}</li>)}
              </ul>
            </div>
            <div className="border-t-4 border-primary pt-5">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">Accepted Medicare Plans</h3>
              <ul className="text-base text-slate-900" data-testid="medicare-plans">
                {medicarePlans.map((plan) => <li key={plan} className="py-3 border-b border-slate-300 leading-relaxed">{plan}</li>)}
              </ul>
              <p className="text-base text-slate-700 mt-6">Questions about your plan? Call <a className="text-primary underline underline-offset-4" href="tel:4075440139">407-544-0139</a>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <span className="inline-flex items-center rounded-full bg-blue-50 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase ring-1 ring-blue-100">
                Coverage
              </span>
              <h2 className="text-4xl font-bold font-display text-slate-900 mt-4 mb-5">
                Insurance Information Made Simple
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8 text-sm">
                We guide you through the financial aspects of your care. Our staff is experienced
                in coordinating with insurance providers — we handle the heavy lifting when it
                comes to filing your claims, ensuring a smoother process for you.
              </p>

              {/* Effortless Claims card */}
              <div className="rounded-2xl bg-white border border-slate-200/70 shadow-soft p-7 mb-7">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-primary to-accent text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-glow-soft flex-shrink-0">
                    <ClipboardList size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">Effortless Claim Filings</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our team works directly with your insurance provider to file and follow up on
                  claims on your behalf. We're committed to maximizing your benefits and minimizing
                  out-of-pocket surprises.
                </p>
              </div>

              {/* Why AMP */}
              <h3 className="text-base font-bold text-slate-900 font-display mb-4">Why AMP Stands Out</h3>
              <ul className="space-y-3">
                {whyAMP.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="space-y-5">
              <div className="bg-white border border-blue-100 rounded-2xl p-7 shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gradient-to-br from-primary to-accent text-white w-9 h-9 rounded-lg flex items-center justify-center shadow-glow-soft">
                    <CreditCard size={17} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Understanding Your Benefits
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Oral surgery may be covered under your dental plan, your medical plan, or both —
                  depending on the nature of your procedure.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                    Know your annual maximum and deductible for both dental and medical plans
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                    Ask your insurer about pre-authorization requirements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                    Bring your insurance card(s) to your first appointment
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200/70 rounded-2xl p-7 shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gradient-to-br from-primary to-accent text-white w-9 h-9 rounded-lg flex items-center justify-center shadow-glow-soft">
                    <Phone size={17} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Questions About Your Coverage?
                  </h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Our financial coordinators are here to help you navigate your benefits and find
                  the best path to treatment.
                </p>
                <p className="font-bold text-slate-900">407-544-0139</p>
                <p className="text-slate-400 text-xs mt-1">Monday – Saturday, 8:00 AM – 4:00 PM</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center rounded-full bg-white text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase ring-1 ring-blue-100 shadow-soft">
              Financial Options
            </span>
            <h2 className="text-4xl font-bold font-display text-slate-900 mt-4 mb-3">
              Flexible Payment Solutions
            </h2>
            <p className="text-slate-500">
              We believe cost should never be a barrier to quality oral health care.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {paymentOptions.map((opt, i) => (
              <Reveal key={opt.title} delay={(i % 2) * 0.1}>
                <div
                  data-testid={`card-payment-${i}`}
                  className="bg-white rounded-2xl p-7 border border-slate-200/70 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 h-full group"
                >
                  <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-primary to-accent mb-4 group-hover:h-10 transition-all" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">{opt.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{opt.description}</p>
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
            Questions about billing or coverage?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Our team is ready to help you understand your options. Reach out today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild className="rounded-full font-semibold px-7 shadow-glow-soft hover:shadow-glow transition-shadow" data-testid="button-contact-insurance">
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-1.5" size={16} />
              </Link>
            </Button>
            <Button size="lg" asChild className="rounded-full font-semibold px-7 bg-white text-slate-900 hover:bg-slate-100">
              <Link href="/new-patients">New Patient Info</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
