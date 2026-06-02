import { Link } from "wouter";
import logoPath from "@assets/amp-logo.png";
import { Phone, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1A30] text-slate-300 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-6">
            <img src={logoPath} alt="AMP Oral Surgery" className="h-12 brightness-0 invert" />
            <p className="text-sm leading-relaxed max-w-xs">
              Providing expert oral surgery care with a focus on patient comfort, safety, and optimal clinical outcomes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-display font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/procedures" className="hover:text-white transition-colors text-sm">Procedures</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/new-patients" className="hover:text-white transition-colors text-sm">New Patients</Link></li>
              <li><Link href="/insurance" className="hover:text-white transition-colors text-sm">Insurance & Billing</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-display font-semibold text-lg">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                <span>123 Medical Center Dr, Suite 200<br/>San Francisco, CA 94143</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>(555) 867-5309</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-display font-semibold text-lg">Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-slate-700/50 pb-2">
                <span>Monday - Friday</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-700/50 pb-2 text-slate-500">
                <span>Saturday - Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} AMP Oral Surgery. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
