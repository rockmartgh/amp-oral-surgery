import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ClipboardList,
  Phone,
  ArrowRight,
  AlertCircle,
  ExternalLink,
  CreditCard,
  ShieldCheck,
  FileText,
  Pill,
  HeartHandshake,
  Stethoscope,
  CalendarCheck,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import receptionImg from "@assets/office-lounge.jpg";
import consultationImg from "@assets/office-consultation.jpg";

const FORMS_URL =
  "https://patientforms.csdental.com/pub/0f10ef38-abc1-ed11-ba77-00155d856ce0/forms/";

const steps = [
  {
    step: "01",
    icon: HeartHandshake,
    title: "Becoming a New Patient",
    description:
      "Choosing the right oral surgery provider is crucial, and we're glad you're considering AMP Oral Surgery. When you walk into our Orlando office, rest assured that you're entering a space where your comfort and well-being come first.",
  },
  {
    step: "02",
    icon: Stethoscope,
    title: "Your Initial Visit",
    description:
      "During your first visit, we'll conduct a thorough examination and discuss your medical and dental history. We'll also explore your treatment options, making sure to explain each one so you can make an informed decision.",
  },
  {
    step: "03",
    icon: ClipboardList,
    title: "Pre-Visit Forms",
    description:
      "For your convenience, we offer downloadable new patient forms. Feel free to fill these out before you arrive, so we can spend more time focusing on you and your needs.",
  },
  {
    step: "04",
    icon: CalendarCheck,
    title: "Begin Your Treatment",
    description:
      "Once your plan is finalized, we'll schedule your procedure and walk you through preparation, recovery, and aftercare instructions every step of the way.",
  },
];

const whatToBring = [
  { icon: CreditCard, label: "Valid Identification", hint: "Driver's license, state ID, or passport." },
  { icon: ShieldCheck, label: "Insurance Card", hint: "Dental and medical, if applicable." },
  { icon: FileText, label: "Medical History Information", hint: "Relevant records and conditions." },
  { icon: Pill, label: "List of Current Medications", hint: "Including supplements and dosages." },
];

const sedationNotes = [
  "Arrange for a responsible adult to drive you home",
  "Do not eat or drink anything for 8 hours beforehand",
  "Wear comfortable, loose-fitting clothing",
  "Leave jewelry and valuables at home",
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

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center rounded-full bg-blue-50 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase ring-1 ring-blue-100">
              What to Expect
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mt-4 mb-3">
              Becoming a New Patient
            </h2>
            <p className="text-slate-500 leading-relaxed">
              We focus on providing top-notch patient care and effective solutions for your oral
              health needs — here's what you should know.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={(i % 2) * 0.08}>
                <div
                  data-testid={`card-step-${i}`}
                  className="rounded-2xl bg-white border border-slate-200/70 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 h-full p-7"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-br from-primary to-accent text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-glow-soft flex-shrink-0">
                      <s.icon size={22} />
                    </div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-primary">
                      Step {s.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Be Prepared — forms, what to bring, sedation */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center rounded-full bg-white text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase ring-1 ring-blue-100 shadow-soft">
              Be Prepared
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mt-4 mb-3">
              Getting Ready for Your Visit
            </h2>
            <p className="text-slate-500 leading-relaxed">
              A few simple steps help us make the most of your time with us.
            </p>
          </Reveal>

          <div className="max-w-5xl mx-auto space-y-6">
            {/* Forms callout — single accent element */}
            <Reveal>
              <div className="rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-glow-soft p-7 md:p-9 flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="bg-white/15 ring-1 ring-white/25 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <ClipboardList size={22} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-display text-white mb-1.5">
                    Complete Your Forms Before You Arrive
                  </h3>
                  <p className="text-white/95 text-sm leading-relaxed max-w-2xl">
                    Save time during your visit by filling out our new patient forms in advance.
                    Click the link to access and complete the necessary forms before your appointment.
                  </p>
                </div>
                <a
                  href={FORMS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold text-sm rounded-full px-7 py-3.5 hover:bg-blue-50 transition-colors flex-shrink-0 shadow-sm"
                  data-testid="link-patient-forms"
                >
                  Access New Patient Forms <ExternalLink size={15} />
                </a>
              </div>
            </Reveal>

            {/* What to bring */}
            <Reveal>
              <div className="rounded-2xl bg-white border border-slate-200/70 shadow-soft p-7 md:p-9">
                <h3 className="text-lg font-bold text-slate-900 mb-1.5 font-display">
                  What to Bring for Your First Visit
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-7">
                  To expedite your appointment, please bring the following with you.
                </p>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  {whatToBring.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-primary to-accent text-white w-11 h-11 rounded-xl flex items-center justify-center shadow-glow-soft flex-shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 font-display">{item.label}</p>
                        <p className="text-slate-500 text-xs leading-relaxed mt-0.5">{item.hint}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Sedation + Questions — matching cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal>
                <div className="rounded-2xl bg-white border border-slate-200/70 shadow-soft p-7 md:p-9 h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="bg-gradient-to-br from-primary to-accent text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-glow-soft flex-shrink-0">
                      <AlertCircle size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-display">
                      If Sedation Is Planned
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-600">
                    {sedationNotes.map((note) => (
                      <li key={note} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-2xl bg-white border border-slate-200/70 shadow-soft p-7 md:p-9 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="bg-gradient-to-br from-primary to-accent text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-glow-soft flex-shrink-0">
                      <Phone size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-display">Have Questions?</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Our team is happy to answer any pre-visit questions. Don't hesitate to reach out
                    before your appointment.
                  </p>
                  <div className="mt-auto">
                    <a
                      href="tel:4075440139"
                      className="text-2xl font-bold font-display text-primary hover:text-accent transition-colors"
                    >
                      407-544-0139
                    </a>
                    <p className="text-slate-400 text-xs mt-1">Monday – Saturday, 8:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </Reveal>
            </div>
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
