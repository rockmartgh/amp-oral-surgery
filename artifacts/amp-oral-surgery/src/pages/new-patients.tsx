import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ClipboardList, Phone, ArrowRight, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import receptionImg from "@assets/office-lounge.jpg";
import consultationImg from "@assets/office-consultation.jpg";

const whatToBring = [
  "Valid Identification",
  "Insurance Card",
  "Medical History Information",
  "List of Current Medications",
];

const steps = [
  {
    step: "01",
    title: "Becoming a New Patient",
    description:
      "Choosing the right oral surgery provider is crucial, and we're glad you're considering AMP Oral Surgery. When you walk into our Orlando office, rest assured that you're entering a space where your comfort and well-being come first.",
  },
  {
    step: "02",
    title: "Your Initial Visit",
    description:
      "During your first visit, we'll conduct a thorough examination and discuss your medical and dental history. We'll also explore your treatment options, making sure to explain each one so you can make an informed decision.",
  },
  {
    step: "03",
    title: "Pre-Visit Forms",
    description:
      "For your convenience, we offer downloadable new patient forms. Feel free to fill these out before you arrive, so we can spend more time focusing on you and your needs.",
  },
  {
    step: "04",
    title: "Begin Your Treatment",
    description:
      "Once your plan is finalized, we'll schedule your procedure and walk you through preparation, recovery, and aftercare instructions every step of the way.",
  },
];

export default function NewPatients() {
  return (
    <div className="flex flex-col w-full">
      <title>New Patients | AMP Oral Surgery</title>

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
              Welcome
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mt-4 mb-4">
              New Patient Information
            </h1>
            <p className="text-slate-200 text-lg leading-relaxed max-w-xl">
              We're glad you've chosen AMP Oral Surgery. Here's everything you need to know to make
              your first visit as smooth and comfortable as possible.
            </p>
            <Button asChild className="rounded-full font-semibold px-7 mt-8 shadow-glow-soft hover:shadow-glow transition-shadow" size="lg">
              <Link href="/contact">Request an Appointment</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Patient Forms Highlight */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-10 text-white shadow-glow flex flex-col md:flex-row md:items-center gap-6">
              <div className="bg-white/20 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                <ClipboardList size={22} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold font-display mb-1">Save Time During Your Visit</h2>
                <p className="text-blue-50 leading-relaxed">
                  Save time during your visit by filling out our new patient forms in advance.
                  Click the link below to access and complete the necessary forms before your appointment.
                </p>
              </div>
              <a
                href="https://patientforms.csdental.com/pub/0f10ef38-abc1-ed11-ba77-00155d856ce0/forms/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm rounded-full px-6 py-3 hover:bg-blue-50 transition-colors flex-shrink-0 shadow-sm"
                data-testid="link-patient-forms"
              >
                Access New Patient Forms <ExternalLink size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center rounded-full bg-blue-50 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase ring-1 ring-blue-100">
              What to Expect
            </span>
            <h2 className="text-4xl font-bold font-display text-slate-900 mt-4 mb-3">
              Becoming a New Patient: What You Should Know
            </h2>
            <p className="text-slate-500">
              We focus on providing top-notch patient care and effective solutions for your oral health needs.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={(i % 2) * 0.1}>
                <div
                  data-testid={`card-step-${i}`}
                  className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-200/70 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="text-3xl font-bold font-display text-gradient select-none leading-none pt-1 flex-shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 font-display">{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <span className="inline-flex items-center rounded-full bg-white text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase ring-1 ring-blue-100 shadow-soft">
                Be Prepared
              </span>
              <h2 className="text-4xl font-bold font-display text-slate-900 mt-4 mb-5">
                What to Bring for Your First Visit
              </h2>
              <p className="text-slate-500 mb-7 leading-relaxed">
                To expedite your appointment, please bring the following to your first visit.
              </p>
              <ul className="space-y-4">
                {whatToBring.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="space-y-5">
              <div className="bg-white border border-blue-100 rounded-2xl p-7 shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gradient-to-br from-primary to-accent text-white w-9 h-9 rounded-lg flex items-center justify-center shadow-glow-soft">
                    <ClipboardList size={17} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-display">Patient Forms</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Save time during your visit by filling out our new patient forms in advance.
                  Access and complete the necessary forms before your appointment.
                </p>
                <a
                  href="https://patientforms.csdental.com/pub/0f10ef38-abc1-ed11-ba77-00155d856ce0/forms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline"
                >
                  Complete New Patient Forms <ExternalLink size={13} />
                </a>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-7 shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-amber-400 text-white w-9 h-9 rounded-lg flex items-center justify-center">
                    <AlertCircle size={17} />
                  </div>
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

              <div className="bg-white border border-slate-200/70 rounded-2xl p-7 shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gradient-to-br from-primary to-accent text-white w-9 h-9 rounded-lg flex items-center justify-center shadow-glow-soft">
                    <Phone size={17} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-display">Questions?</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  Our team is happy to answer any pre-visit questions. Don't hesitate to reach out.
                </p>
                <p className="font-bold text-slate-900">407-544-0139</p>
                <p className="text-slate-400 text-xs mt-1">Monday – Saturday, 8:00 AM – 4:00 PM</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Image + CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal className="relative">
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl border-2 border-accent/20 hidden md:block" />
              <div className="rounded-2xl overflow-hidden aspect-[4/3] ring-frame relative">
                <img
                  src={consultationImg}
                  alt="Welcoming consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                Ready to schedule your first appointment?
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                We're accepting new patients and would love to meet you. Contact our office today —
                our team will guide you through every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild className="rounded-full font-semibold px-7" data-testid="button-schedule-newpatient">
                  <Link href="/contact">
                    Request an Appointment <ArrowRight className="ml-1.5" size={16} />
                  </Link>
                </Button>
                <Button size="lg" asChild className="rounded-full font-semibold px-7 bg-slate-900 text-white hover:bg-slate-800">
                  <Link href="/insurance">Insurance & Billing</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
