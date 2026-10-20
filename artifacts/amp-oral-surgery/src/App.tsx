import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Procedures from "@/pages/procedures";
import About from "@/pages/about";
import NewPatients from "@/pages/new-patients";
import Insurance from "@/pages/insurance";
import Contact from "@/pages/contact";
import PatientResources from "@/pages/patient-resources";
import { PrivacyPolicy, TermsAndConditions } from "@/pages/policies";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Images used on pages other than home — resolved by Vite at build time
import _officeLounge from "@assets/office-lounge.jpg";
import _officeConsultation from "@assets/office-consultation.jpg";
import _officeProcedure from "@assets/office-procedure-suite.jpg";
import _officeTeam from "@assets/office-team.jpg";
import _drElmore from "@assets/image_1780390665346.jpg";
import _videoPoster from "@assets/Image-51_1780387953861.jpg";

const PREFETCH_IMAGES = [
  _officeLounge,
  _officeConsultation,
  _officeProcedure,
  _officeTeam,
  _drElmore,
  _videoPoster,
];

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return null;
}

function ImagePreloader() {
  useEffect(() => {
    const load = () => PREFETCH_IMAGES.forEach((src) => { new Image().src = src; });
    if ("requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback: (cb: () => void) => void })
        .requestIdleCallback(load);
    } else {
      setTimeout(load, 300);
    }
  }, []);
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <ImagePreloader />
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/procedures" component={Procedures} />
          <Route path="/about" component={About} />
          <Route path="/new-patients" component={NewPatients} />
          <Route path="/insurance" component={Insurance} />
          <Route path="/patient-resources" component={PatientResources} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route path="/terms" component={TermsAndConditions} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
