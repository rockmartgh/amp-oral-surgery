import { Link } from "wouter";
import logoPath from "@assets/amp-logo.png";
import foxpointLogo from "@assets/image_1780389968177.png";
import { Phone, MapPin, Mail, Clock, Instagram } from "lucide-react";

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
              <a
                href="https://www.instagram.com/amporalsurgery/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow AMP Oral Surgery on Instagram"
                className="hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
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
                <span>
                  <span className="block text-white font-semibold text-xs uppercase tracking-wide mb-0.5">Orlando — Main Office</span>
                  3861 Avalon Park E Blvd<br/>Orlando, FL 32828
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                <span>
                  <span className="block text-white font-semibold text-xs uppercase tracking-wide mb-0.5">Clermont — Satellite</span>
                  2607 S US Highway 27, Suite 102<br/>Clermont, FL 34711
                  <span className="block text-slate-500 text-xs mt-0.5">By appointment only</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <a href="tel:4075440139" className="hover:text-white transition-colors">407-544-0139</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:info@ampomfs.com" className="hover:text-white transition-colors">info@ampomfs.com</a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-display font-semibold text-lg">Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-slate-700/50 pb-2">
                <span>Monday - Saturday</span>
                <span>8:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-700/50 pb-2 text-slate-500">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 leading-relaxed">
              Concierge and after-hours appointments available by request.
            </p>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} AMP Oral Surgery. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-slate-800/40 flex items-center justify-center gap-2 text-xs text-slate-600">
          <span>Designed and Powered by</span>
          <img src={foxpointLogo} alt="FoxPoint Web Designs" className="h-4" />
        </div>
      </div>
    </footer>
  );
}
