import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Mail, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import receptionImg from "@assets/office-lounge.jpg";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "3861 Avalon Park E Blvd\nOrlando, FL 32828",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "407-544-0139",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@ampomfs.com",
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

      {/* Contact Content */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: Info */}
            <Reveal className="space-y-10">
              <div>
                <span className="inline-flex items-center rounded-full bg-blue-50 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-5 ring-1 ring-blue-100 w-fit">
                  Reach Us
                </span>
                <div className="space-y-6 mt-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-primary to-accent text-white w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-glow-soft">
                        <item.icon size={17} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                          {item.label}
                        </p>
                        <p className="text-slate-800 font-medium whitespace-pre-line leading-relaxed text-sm">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="inline-flex items-center rounded-full bg-blue-50 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-4 ring-1 ring-blue-100 w-fit">
                  Office Hours
                </span>
                <div className="bg-white rounded-2xl border border-slate-200/70 overflow-hidden mt-4 shadow-soft">
                  {hours.map((h, i) => (
                    <div
                      key={h.day}
                      className={`flex justify-between items-center px-5 py-4 text-sm ${
                        i < hours.length - 1 ? "border-b border-slate-100" : ""
                      } ${h.time === "Closed" ? "text-slate-400" : "text-slate-700"}`}
                    >
                      <span className="font-medium">{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                  Concierge and after-hours appointments available by request.
                </p>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden bg-slate-100 h-48 flex items-center justify-center text-slate-400 border border-slate-200/70 shadow-soft bg-grid">
                <div className="text-center">
                  <MapPin size={28} className="mx-auto mb-2 text-slate-300" />
                  <p className="text-sm font-medium text-slate-400">3861 Avalon Park E Blvd, Orlando, FL 32828</p>
                </div>
              </div>
            </Reveal>

            {/* Right: Form */}
            <Reveal delay={0.15}>
              <span className="inline-flex items-center rounded-full bg-blue-50 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-6 ring-1 ring-blue-100 w-fit">
                Send a Message
              </span>

              {submitted ? (
                <div className="bg-green-50 border border-green-100 rounded-2xl p-10 text-center mt-4 shadow-soft">
                  <CheckCircle2 size={40} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 font-display mb-2">
                    Message Received!
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Thank you for reaching out. A member of our team will contact you within 1
                    business day to follow up.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 bg-white rounded-2xl p-7 border border-slate-200/70 mt-4 shadow-lifted"
                >
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
                    We typically respond within 1 business day. For urgent matters, please call us directly at 407-544-0139.
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
