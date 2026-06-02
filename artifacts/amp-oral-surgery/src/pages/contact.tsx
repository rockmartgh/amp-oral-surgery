import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock, Mail, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Medical Center Dr, Suite 200\nSan Francisco, CA 94143",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 867-5309",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@amporalsurgery.com",
  },
];

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
  { day: "Saturday", time: "Closed" },
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

      {/* Hero */}
      <section className="bg-[#0B1A30] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold tracking-widest text-xs uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              Have a question, need to schedule an appointment, or want to learn more about our
              services? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: Info */}
            <div className="space-y-10">
              <div>
                <p className="text-blue-500 font-semibold tracking-widest text-xs uppercase mb-6">
                  Reach Us
                </p>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="bg-blue-100 text-primary w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                          {item.label}
                        </p>
                        <p className="text-slate-800 font-medium whitespace-pre-line leading-relaxed">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-blue-500 font-semibold tracking-widest text-xs uppercase mb-6">
                  Office Hours
                </p>
                <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                  {hours.map((h, i) => (
                    <div
                      key={h.day}
                      className={`flex justify-between items-center px-6 py-4 text-sm ${
                        i < hours.length - 1 ? "border-b border-slate-100" : ""
                      } ${h.time === "Closed" ? "text-slate-400" : "text-slate-700"}`}
                    >
                      <span className="font-medium">{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden bg-slate-100 h-56 flex items-center justify-center text-slate-400 border border-slate-100">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto mb-2 text-slate-300" />
                  <p className="text-sm font-medium">Map placeholder</p>
                  <p className="text-xs">123 Medical Center Dr, San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <p className="text-blue-500 font-semibold tracking-widest text-xs uppercase mb-6">
                Send a Message
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-100 rounded-2xl p-10 text-center">
                  <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 font-display mb-2">
                    Message Received!
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Thank you for reaching out. A member of our team will contact you within 1
                    business day to follow up.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-slate-50 rounded-2xl p-8 border border-slate-100"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={handleChange}
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      data-testid="input-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={form.preferredContact}
                      onChange={handleChange}
                      data-testid="select-preferred-contact"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option>Phone</option>
                      <option>Email</option>
                      <option>Either</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      value={form.message}
                      onChange={handleChange}
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full font-semibold text-base"
                    data-testid="button-submit-contact"
                  >
                    Send Message
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    We typically respond within 1 business day. For urgent matters, please call us
                    directly at (555) 867-5309.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
