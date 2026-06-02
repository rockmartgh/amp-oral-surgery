import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Mail, CheckCircle2, Clock, Instagram, ArrowRight, Navigation } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import receptionImg from "@assets/office-lounge.jpg";

const mapsLink = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const mapsEmbed = (q: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
const INSTAGRAM_URL = "https://www.instagram.com/amporalsurgery/?hl=en";

const locations = [
  {
    name: "Orlando",
    tag: "Main Office",
    address: "3861 Avalon Park E Blvd\nOrlando, FL 32828",
    query: "3861 Avalon Park E Blvd, Orlando, FL 32828",
    note: null as string | null,
  },
  {
    name: "Clermont",
    tag: "Satellite Location",
    address: "2607 S US Highway 27, Suite 102\nClermont, FL 34711",
    query: "2607 S US Highway 27, Suite 102, Clermont, FL 34711",
    note: "By appointment only" as string | null,
  },
];

const contactCards = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Orlando & Clermont, FL",
    cta: "View Locations",
    href: "#locations",
    external: false,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "407-544-0139",
    cta: "Mon–Sat, 8 AM – 4 PM",
    href: "tel:4075440139",
    external: false,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@ampomfs.com",
    cta: "Send us a note",
    href: "mailto:info@ampomfs.com",
    external: false,
  },
];

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 4:00 PM" },
  { day: "Saturday", time: "8:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "Phone",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col w-full">
      <title>Contact Us | AMP Oral Surgery</title>

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
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 text-white px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-4 w-fit backdrop-blur-md">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight">
              Contact Us
            </h1>
            <p className="text-slate-200 text-lg leading-relaxed max-w-xl mt-4">
              Have a question or ready to schedule? Reach out and a member of our team will be glad
              to help.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 -mt-16 relative z-20">
          <div className="grid sm:grid-cols-3 gap-5">
            {contactCards.map((card, i) => (
              <Reveal key={card.label} delay={i * 0.08}>
                <a
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="group block h-full bg-white rounded-2xl border border-slate-200/70 p-6 shadow-lifted hover:shadow-glow-soft hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-primary to-accent text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-glow-soft mb-4">
                    <card.icon size={20} />
                  </div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                    {card.label}
                  </p>
                  <p className="text-slate-900 font-semibold whitespace-pre-line leading-snug">
                    {card.value}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mt-3 group-hover:gap-2 transition-all">
                    {card.cta}
                    <ArrowRight size={12} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1.55fr_1fr] gap-10 lg:gap-14 items-start">

            {/* Form */}
            <Reveal>
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/70 shadow-lifted">
                <span className="inline-flex items-center rounded-full bg-blue-50 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase ring-1 ring-blue-100 w-fit">
                  Send a Message
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold font-display text-slate-900 mt-4 mb-2">
                  Request an Appointment
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-7">
                  Fill out the form below and a member of our team will reach out to help you schedule.
                </p>

                {submitted ? (
                  <div className="bg-green-50 border border-green-100 rounded-2xl p-10 text-center">
                    <CheckCircle2 size={40} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900 font-display mb-2">
                      Message Received!
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Thank you for reaching out. A member of our team will contact you shortly to
                      follow up.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</Label>
                        <Input id="name" name="name" required placeholder="Jane Smith" value={form.name} onChange={handleChange} data-testid="input-name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={handleChange} data-testid="input-phone" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</Label>
                      <Input id="email" name="email" type="email" required placeholder="jane@example.com" value={form.email} onChange={handleChange} data-testid="input-email" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredContact" className="text-sm font-medium text-slate-700">Preferred Contact Method</Label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={form.preferredContact}
                        onChange={handleChange}
                        data-testid="select-preferred-contact"
                        className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option>Phone</option>
                        <option>Email</option>
                        <option>Either</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-slate-700">Message</Label>
                      <Textarea id="message" name="message" required rows={5} placeholder="Tell us how we can help you..." value={form.message} onChange={handleChange} data-testid="textarea-message" />
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-full font-semibold shadow-glow-soft hover:shadow-glow transition-shadow" data-testid="button-submit-contact">
                      Send Message
                    </Button>

                    <p className="text-xs text-slate-400 text-center">
                      For urgent matters, please call us directly at 407-544-0139.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Sidebar */}
            <Reveal delay={0.15} className="space-y-6">
              {/* Office Hours */}
              <div className="bg-white rounded-3xl border border-slate-200/70 shadow-soft overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-100">
                  <div className="bg-blue-50 text-primary w-10 h-10 rounded-xl flex items-center justify-center">
                    <Clock size={18} />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-lg">Office Hours</h3>
                </div>
                <div className="px-6 py-2">
                  {hours.map((h, i) => (
                    <div
                      key={h.day}
                      className={`flex justify-between items-center py-3.5 text-sm ${
                        i < hours.length - 1 ? "border-b border-slate-100" : ""
                      }`}
                    >
                      <span className="font-medium text-slate-700">{h.day}</span>
                      <span className={h.time === "Closed" ? "text-slate-400" : "text-slate-900 font-semibold"}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="px-6 pb-5">
                  <p className="text-xs text-slate-500 leading-relaxed bg-slate-50 rounded-xl px-4 py-3">
                    Concierge and after-hours appointments available by request.
                  </p>
                </div>
              </div>

              {/* Follow Us */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl p-6 text-white shadow-lifted bg-gradient-to-br from-[#1863DC] via-[#7C3AED] to-[#CC3366] hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/15 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center ring-1 ring-white/20">
                    <Instagram size={22} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Follow Along</p>
                    <p className="font-semibold leading-tight">@amporalsurgery</p>
                  </div>
                  <ArrowRight size={18} className="ml-auto text-white/70 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-white/85 leading-relaxed mt-4">
                  See patient stories, surgical care, and a look behind the scenes at our practice.
                </p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="pb-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center rounded-full bg-blue-50 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase ring-1 ring-blue-100">
              Our Locations
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 mt-4">
              Two Convenient Locations
            </h2>
            <p className="text-slate-500 mt-3 leading-relaxed">
              Serving the greater Orlando area from our main office in Avalon Park and our satellite
              location in Clermont.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((loc, i) => (
              <Reveal key={loc.name} delay={i * 0.1}>
                <div className="rounded-3xl overflow-hidden border border-slate-200/70 shadow-lifted h-full flex flex-col">
                  <div className="flex items-start gap-3 px-6 py-5 bg-white border-b border-slate-100">
                    <div className="bg-blue-50 text-primary w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-display font-bold text-slate-900">{loc.name}</p>
                        <span className="text-[10px] font-semibold uppercase tracking-wide text-primary bg-blue-50 rounded-full px-2 py-0.5">
                          {loc.tag}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 whitespace-pre-line leading-snug mt-1">
                        {loc.address}
                      </p>
                      {loc.note && <p className="text-xs text-slate-400 mt-1">{loc.note}</p>}
                    </div>
                  </div>
                  <iframe
                    title={`AMP Oral Surgery ${loc.name} location map`}
                    src={mapsEmbed(loc.query)}
                    className="w-full h-[300px] border-0 grow"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <div className="px-6 py-4 bg-white border-t border-slate-100">
                    <Button asChild variant="outline" className="rounded-full font-semibold w-full">
                      <a href={mapsLink(loc.query)} target="_blank" rel="noopener noreferrer">
                        <Navigation size={15} className="mr-1.5" /> Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
