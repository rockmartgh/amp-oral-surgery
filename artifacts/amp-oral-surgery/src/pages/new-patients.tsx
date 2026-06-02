import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ClipboardList, Phone, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

const whatToBring = [
  "Photo ID (driver's license or passport)",
  "Insurance cards (dental and medical)",
  "List of current medications (including supplements)",
  "Previous dental and medical records if applicable",
  "Completed new patient forms (see below)",
  "A responsible adult if sedation is planned",
];

const steps = [
  {
    step: "01",
    title: "Schedule Your Consultation",
    description:
      "Call our office or submit a request online. Our scheduling team will find a convenient time and confirm your appointment with a reminder.",
  },
  {
    step: "02",
    title: "Complete Your New Patient Forms",
    description:
      "We will send you patient intake forms prior to your visit. Completing these in advance saves time and helps us prepare for your care.",
  },
  {
    step: "03",
    title: "Meet Our Team",
    description:
      "At your first appointment, you'll meet your surgeon, review your medical history, and receive a thorough examination and treatment plan discussion.",
  },
  {
    step: "04",
    title: "Begin Your Treatment",
    description:
      "Once your plan is finalized, we'll schedule your procedure and walk you through preparation, recovery, and aftercare instructions.",
  },
];

export default function NewPatients() {
  return (
    <div className="flex flex-col w-full">
      <title>New Patients | AMP Oral Surgery</title>

      {/* Hero */}
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-white border border-slate-200 text-slate-500 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
            Welcome
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight mt-4 mb-4">
            New Patient Information
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
            We're glad you've chosen AMP Oral Surgery. Here's everything you need to know to make
            your first visit as smooth and comfortable as possible.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-500 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
              How It Works
            </span>
            <h2 className="text-4xl font-bold font-display text-slate-900 mt-4 mb-3">
              Your First Visit, Step by Step
            </h2>
            <p className="text-slate-500">
              We've designed a clear, simple process so you always know what's coming next.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <div
                key={s.step}
                data-testid={`card-step-${i}`}
                className="flex gap-5 p-6 rounded-xl bg-slate-50 border border-slate-200"
              >
                <div className="text-3xl font-bold font-display text-slate-200 select-none leading-none pt-1 flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 font-display">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-flex items-center rounded-full bg-white border border-slate-200 text-slate-500 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                Be Prepared
              </span>
              <h2 className="text-4xl font-bold font-display text-slate-900 mt-4 mb-5">
                What to Bring to Your Appointment
              </h2>
              <p className="text-slate-500 mb-7 leading-relaxed">
                Having the right documents on hand at your first visit helps us serve you efficiently
                and create the most accurate treatment plan.
              </p>
              <ul className="space-y-4">
                {whatToBring.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-7">
                <div className="flex items-center gap-3 mb-3">
                  <ClipboardList className="text-primary" size={20} />
                  <h3 className="text-base font-bold text-slate-900 font-display">Patient Forms</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  We will email your new patient intake forms before your appointment. Please
                  complete and return them at least 24 hours in advance so our team can review
                  your medical and dental history ahead of your visit.
                </p>
                <p className="text-slate-400 text-xs italic">
                  If you haven't received your forms, please call our office and we'll resend them.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-7">
                <div className="flex items-center gap-3 mb-3">
                  <AlertCircle className="text-amber-500" size={20} />
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    If Sedation Is Planned
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 flex-shrink-0"></span>
                    Arrange for a responsible adult to drive you home
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 flex-shrink-0"></span>
                    Do not eat or drink anything for 8 hours before your procedure
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 flex-shrink-0"></span>
                    Wear comfortable, loose-fitting clothing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 flex-shrink-0"></span>
                    Leave jewelry and valuables at home
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-7">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="text-primary" size={20} />
                  <h3 className="text-base font-bold text-slate-900 font-display">Questions?</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  Our team is happy to answer any pre-visit questions. Don't hesitate to reach out.
                </p>
                <p className="font-bold text-slate-900">(555) 867-5309</p>
                <p className="text-slate-400 text-xs mt-1">Monday – Friday, 8:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
            Ready to schedule your first appointment?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            We're accepting new patients and would love to meet you. Contact us today.
          </p>
          <Button
            size="lg"
            asChild
            className="font-medium px-6 gap-1.5"
          >
            <Link href="/contact" data-testid="button-schedule-newpatient">
              Request an Appointment <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
