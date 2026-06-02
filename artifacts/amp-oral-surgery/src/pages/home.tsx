import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Star, ArrowRight, ShieldCheck, Heart, Stethoscope } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Modern Dental Clinic" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl text-white space-y-6">
            <div className="inline-flex items-center rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-sm font-medium text-blue-200 mb-2">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
              Accepting New Patients
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1]">
              Expert Surgical Care. <span className="text-blue-400">Exceptional Comfort.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-sans max-w-xl leading-relaxed">
              Experience state-of-the-art oral and maxillofacial surgery where your well-being is our highest priority. Restoring health, function, and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="rounded-full text-base font-semibold px-8 py-6">
                <Link href="/contact">Request an Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full text-base font-semibold px-8 py-6 bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white">
                <Link href="/procedures">View Our Procedures</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">Why Choose AMP Oral Surgery?</h2>
            <p className="text-slate-600 text-lg">We combine advanced clinical expertise with genuine compassion to provide an unparalleled surgical experience.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="bg-blue-100 text-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Board-Certified Excellence</h3>
              <p className="text-slate-600 leading-relaxed">Our surgeons are highly trained specialists dedicated to maintaining the highest standards of safety and clinical outcomes.</p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="bg-blue-100 text-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Stethoscope size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">State-of-the-Art Technology</h3>
              <p className="text-slate-600 leading-relaxed">We utilize 3D imaging, digital planning, and modern surgical techniques to ensure precision, predictability, and faster recovery.</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="bg-pink-50 text-secondary w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Compassionate Care</h3>
              <p className="text-slate-600 leading-relaxed">Surgery can be daunting. Our entire team is dedicated to creating a warm, reassuring environment tailored to your comfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">Ready to restore your smile and health?</h2>
            <p className="text-xl text-blue-100">Contact our office today to schedule your consultation and discuss your treatment options.</p>
            <Button size="lg" asChild className="rounded-full bg-white text-primary hover:bg-slate-100 text-lg px-8 py-6 mt-4">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
