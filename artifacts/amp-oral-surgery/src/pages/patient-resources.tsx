import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import procedureImg from "@assets/office-procedure-suite.jpg";

type Lang = "en" | "es";

const videos = [
  {
    title: "Implant Surgery",
    description:
      "Understand what to expect during dental implant surgery — the steps involved, how to prepare, and what recovery looks like.",
    en: "https://player.vimeo.com/video/729696400?h=c665021453&badge=0&autopause=0&player_id=0&app_id=58479",
    es: "https://player.vimeo.com/video/755637485?h=7acb8cd627&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    title: "Wisdom Tooth Surgery",
    description:
      "Learn about wisdom tooth removal — what happens during the procedure, sedation options, and aftercare instructions.",
    en: "https://player.vimeo.com/video/734037619?h=74008a8af4&badge=0&autopause=0&player_id=0&app_id=58479",
    es: "https://player.vimeo.com/video/755645526?h=4b89953d16&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    title: "TMJ Surgery",
    description:
      "An overview of temporomandibular joint (TMJ) surgery, including what causes TMJ disorders and how surgical treatment can help.",
    en: "https://player.vimeo.com/video/1045418674?badge=0&autopause=0&player_id=0&app_id=58479",
    es: "https://player.vimeo.com/video/1052047787?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    title: "Corrective Jaw Surgery",
    description:
      "A guide to orthognathic (corrective jaw) surgery — how it corrects bite and facial structure issues and what the process entails.",
    en: "https://player.vimeo.com/video/1044816518?badge=0&autopause=0&player_id=0&app_id=58479",
    es: "https://player.vimeo.com/video/1052050569?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    title: "Exposure and Bond Surgery",
    description:
      "Learn about the exposure and bonding procedure used to help impacted teeth erupt properly in coordination with orthodontic treatment.",
    en: "https://player.vimeo.com/video/734035912?h=b8a1e1eb93&badge=0&autopause=0&player_id=0&app_id=58479",
    es: "https://player.vimeo.com/video/755638592?h=167b296233&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    title: "Patient Escort Instructions",
    description:
      "Important instructions for the person accompanying a patient who will be receiving sedation — what to expect and how to help.",
    en: "https://player.vimeo.com/video/729691058?h=49db739816&badge=0&autopause=0&player_id=0&app_id=58479",
    es: "https://player.vimeo.com/video/755639683?h=50260c8c59&badge=0&autopause=0&player_id=0&app_id=58479",
  },
];

export default function PatientResources() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <div className="flex flex-col w-full">
      <title>Patient Resources | AMP Oral Surgery</title>

      {/* Hero */}
      <section className="relative min-h-[52vh] overflow-hidden bg-slate-900">
        <img
          src={procedureImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/65 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-white" />
        <div className="absolute inset-0 bg-grid-dark opacity-25" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-36 pb-28">
          <Reveal y={20} className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 text-white px-3 py-1 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              Education
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mt-4 mb-4">
              Patient Resources
            </h1>
            <p className="text-slate-200 text-lg leading-relaxed max-w-xl">
              Educational informed consent videos to help you understand your upcoming procedure.
              Watch before your appointment and bring any questions to your consultation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Videos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Language toggle */}
          <Reveal className="flex items-center justify-between flex-wrap gap-4 mb-12">
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-50 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase ring-1 ring-blue-100">
                Informed Consent Videos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mt-3">
                Educational Video Library
              </h2>
            </div>
            <div className="flex items-center gap-1 bg-slate-100 rounded-full p-1">
              <button
                onClick={() => setLang("en")}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  lang === "en"
                    ? "bg-white text-slate-900 shadow-soft"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  lang === "es"
                    ? "bg-white text-slate-900 shadow-soft"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Español
              </button>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, i) => (
              <Reveal key={video.title} delay={(i % 2) * 0.08}>
                <div className="rounded-2xl bg-white border border-slate-200/70 shadow-soft overflow-hidden hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* Responsive 16:9 embed */}
                  <div className="relative w-full aspect-video bg-slate-900">
                    <iframe
                      key={lang}
                      src={video[lang]}
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                      title={`${video.title} — ${lang === "en" ? "English" : "Español"}`}
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-slate-900 font-display mb-2">
                      {video.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{video.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="text-center text-slate-400 text-xs mt-12 max-w-2xl mx-auto leading-relaxed">
              These videos are provided by OMSNIC (Oral and Maxillofacial Surgery National Insurance Company)
              for patient educational and informed consent purposes. Please watch the video relevant to your
              upcoming procedure and bring any questions to your appointment.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
