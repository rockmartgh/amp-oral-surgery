import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ClipboardList, Clock, Phone, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

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
      <section className="bg-[#0B1A30] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold tracking-widest text-xs uppercase mb-4">
              Welcome
            </p>
            <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight mb-6">
              New Patient Information
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              We're glad you've chosen AMP Oral Surgery. Here's everything you need to know to make
              your first visit as smooth and comfortable as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-blue-500 font-semibold tracking-widest text-xs uppercase mb-4">
              How It Works
            </p>
            <h2 className="text-4xl font-bold font-display text-slate-900 mb-4">
              Your First Visit, Step by Step
            </h2>
            <p className="text-slate-600 text-lg">
              We've designed a clear, simple process so you always know what's coming next.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <div
                key={s.step}
                data-testid={`card-step-${i}`}
                className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="text-4xl font-bold font-display text-blue-200 select-none leading-none pt-1">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
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
              <p className="text-blue-500 font-semibold tracking-widest text-xs uppercase mb-4">
                Be Prepared
              </p>
              <h2 className="text-4xl font-bold font-display text-slate-900 mb-6">
                What to Bring to Your Appointment
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Having the right documents on hand at your first visit helps us serve you efficiently
                and create the most accurate treatment plan.
              </p>
              <ul className="space-y-4">
                {whatToBring.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <ClipboardList className="text-primary" size={24} />
                  <h3 className="text-lg font-bold text-slate-900 font-display">Patient Forms</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  We will email your new patient intake forms before your appointment. Please
                  complete and return them at least 24 hours in advance so our team can review
                  your medical and dental history ahead of your visit.
                </p>
                <p className="text-slate-500 text-sm italic">
                  If you haven't received your forms, please call our office and we'll resend them.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="text-amber-600" size={24} />
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    If Sedation Is Planned
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
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

              <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="text-primary" size={24} />
                  <h3 className="text-lg font-bold text-slate-900 font-display">Questions?</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Our team is happy to answer any pre-visit questions. Don't hesitate to reach out.
                </p>
                <p className="font-bold text-slate-900 text-lg">(555) 867-5309</p>
                <p className="text-slate-500 text-sm mt-1">Monday – Friday, 8:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to schedule your first appointment?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            We're accepting new patients and would love to meet you. Contact us today.
          </p>
          <Button
            size="lg"
            asChild
            className="rounded-full bg-white text-primary hover:bg-slate-100 text-base font-semibold px-8 py-6"
          >
            <Link href="/contact" data-testid="button-schedule-newpatient">
              Request an Appointment <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
