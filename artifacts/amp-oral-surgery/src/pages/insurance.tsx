import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, CreditCard, ArrowRight, CheckCircle2 } from "lucide-react";

const insuranceProviders = [
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "Delta Dental",
  "Guardian",
  "Humana",
  "MetLife",
  "United Healthcare",
  "Principal Financial",
  "Sun Life Financial",
  "Lincoln Financial",
  "Ameritas",
  "Assurant",
  "Careington",
  "Dental Select",
  "First Dental Health",
];

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

      {/* Hero */}
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-white border border-slate-200 text-slate-500 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
            Billing & Coverage
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight mt-4 mb-4">
            Insurance & Financing
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
            We work with most major dental and medical insurance plans and offer flexible payment
            options to make your care as affordable as possible.
          </p>
        </div>
      </section>

      {/* Insurance Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-500 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                Coverage
              </span>
              <h2 className="text-4xl font-bold font-display text-slate-900 mt-4 mb-5">
                Accepted Insurance Plans
              </h2>
              <p className="text-slate-500 leading-relaxed mb-3 text-sm">
                AMP Oral Surgery participates with a wide range of dental and medical insurance
                providers. Many oral surgery procedures — particularly those that are medically
                necessary — may be covered under your medical plan in addition to dental coverage.
              </p>
              <p className="text-slate-500 leading-relaxed mb-7 text-sm">
                We strongly encourage you to contact your insurance provider before your visit to
                understand your benefits. Our billing team is happy to assist with questions and
                prior authorizations.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {insuranceProviders.map((provider, i) => (
                  <div
                    key={provider}
                    data-testid={`item-insurance-${i}`}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="text-primary flex-shrink-0" size={15} />
                    <span className="text-slate-600 text-sm">{provider}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-xs mt-5 italic">
                Don't see your plan listed? Contact us — we may still be able to work with your provider.
              </p>
            </div>

            <div className="space-y-5">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-7">
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard className="text-primary" size={20} />
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Understanding Your Benefits
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Oral surgery may be covered under your dental plan, your medical plan, or both —
                  depending on the nature of your procedure. To get the most out of your coverage:
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

              <div className="bg-white border border-slate-200 rounded-xl p-7">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="text-primary" size={20} />
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Questions About Your Coverage?
                  </h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Our financial coordinators are here to help you navigate your benefits and find
                  the best path to treatment.
                </p>
                <p className="font-bold text-slate-900">(555) 867-5309</p>
                <p className="text-slate-400 text-xs mt-1">Monday – Friday, 8:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center rounded-full bg-white border border-slate-200 text-slate-500 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
              Financial Options
            </span>
            <h2 className="text-4xl font-bold font-display text-slate-900 mt-4 mb-3">
              Flexible Payment Solutions
            </h2>
            <p className="text-slate-500">
              We believe cost should never be a barrier to quality oral health care. We offer
              multiple ways to make treatment accessible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {paymentOptions.map((opt, i) => (
              <div
                key={opt.title}
                data-testid={`card-payment-${i}`}
                className="bg-white rounded-xl p-7 border border-slate-200 hover:shadow-sm transition-all"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">{opt.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{opt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
            Questions about billing or coverage?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Our team is ready to help you understand your options. Reach out today.
          </p>
          <Button
            size="lg"
            asChild
            className="font-medium px-6 gap-1.5"
          >
            <Link href="/contact" data-testid="button-contact-insurance">
              Contact Us <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
