import { Link } from "wouter";
import privacy from "@/content/privacy-website.json";
import terms from "@/content/terms-website.json";

function PolicyContact() {
  return <p>AMP Oral Surgery (AMP ORAL AND MAXILLOFACIAL SURGERY, PA)<br />
    3861 Avalon Park E Blvd, Orlando, FL 32828<br />
    Phone: <a href="tel:4075440139">407-544-0139</a><br />
    Email: <a href="mailto:info@ampomfs.com">info@ampomfs.com</a></p>;
}

function PolicyPage({ kind }: { kind: "privacy" | "terms" }) {
  const isPrivacy = kind === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms and Conditions";
  return (
    <article className="policy-copy bg-white text-slate-900 px-5 pt-36 pb-20 md:pt-44">
      <title>{title} | AMP Oral Surgery</title>
      <div className="max-w-3xl mx-auto">
        <header className="border-b-4 border-primary pb-8 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
          <p className="mt-5">Website policies and SMS text messaging information for AMP Oral Surgery.</p>
          <nav aria-label="Policy sections" className="flex flex-wrap gap-x-6 gap-y-3 mt-5">
            <a href="#sms">SMS text messaging</a>
            <a href="#website">Website {isPrivacy ? "privacy policy" : "terms of service"}</a>
            <Link href={isPrivacy ? "/terms" : "/privacy"}>{isPrivacy ? "Terms and Conditions" : "Privacy Policy"}</Link>
          </nav>
        </header>

        <section id="sms" className="scroll-mt-32 mb-14" aria-labelledby="sms-heading">
          <h2 id="sms-heading">SMS Text Messaging {isPrivacy ? "Privacy" : "Terms"}</h2>
          <p>Effective date: October 20, 2026</p>
          {isPrivacy ? <>
            <p>AMP Oral Surgery respects your privacy. This section explains how we handle information when you opt in to receive SMS text messages from us. These SMS-specific protections apply in addition to the website privacy policy below and control if its general sharing or communications provisions conflict with this section.</p>
            <h3>Information collected and used for SMS</h3>
            <p>When you opt in, we collect your mobile phone number and your consent to receive SMS messages. We use this information to send the text communications you have opted in to receive and to respond to your messages. The purposes of the messages are limited to those disclosed when you give consent. Providing a phone number or using this website does not by itself authorize marketing text messages.</p>
            <h3>SMS information is not shared for third-party marketing</h3>
            <p>We do not sell or share phone numbers collected for SMS purposes, SMS opt-in information, or SMS consent with third parties or affiliates for their marketing or promotional purposes. Service providers may process this information only as needed to provide messaging services on our behalf.</p>
            <h3>Your choices</h3>
            <p>You can opt out of SMS messages at any time by replying STOP. Reply HELP for assistance, or contact our office using the details below. See our <Link href="/terms#sms">SMS terms</Link> for message frequency, rates, and additional information.</p>
            <h3>Security</h3>
            <p>We use reasonable safeguards to protect personal information from unauthorized access or disclosure. No electronic transmission or storage system can be guaranteed completely secure.</p>
          </> : <>
            <p>These terms apply when you opt in to receive SMS text messages from AMP Oral Surgery. They supplement the website terms of service below. Browsing the website or submitting a contact or referral request does not by itself enroll you in an SMS program.</p>
            <h3>Consent and message purposes</h3>
            <p>By opting in, you agree to receive the text communications from AMP Oral Surgery described to you at the time of consent. Messages are limited to the purposes you agree to receive. These terms do not grant permission for additional marketing messages.</p>
            <h3>Message frequency and rates</h3>
            <p>Message frequency varies based on the communications you opt in to receive and your interactions with our office. Message and data rates may apply according to your mobile carrier and plan.</p>
            <h3>Opt out and get help</h3>
            <p>Reply STOP to any SMS message to opt out. Reply HELP for support. You can also call <a href="tel:4075440139">407-544-0139</a> or email <a href="mailto:info@ampomfs.com">info@ampomfs.com</a> for assistance.</p>
            <h3>Privacy</h3>
            <p>Your information is handled according to our <Link href="/privacy">Privacy Policy</Link>, including its SMS-specific protections.</p>
            <h3>Delivery and eligibility</h3>
            <p>SMS delivery depends on your mobile carrier and other service providers. AMP Oral Surgery and mobile carriers are not responsible for delayed or undelivered messages or carrier-related errors or charges. By opting in, you confirm that you are the owner or authorized user of the mobile phone number provided and are at least 18 years old.</p>
          </>}
          <h3>Contact AMP Oral Surgery</h3>
          <PolicyContact />
        </section>

        <section id="website" className="scroll-mt-32 border-t border-slate-300 pt-8" aria-labelledby="website-heading">
          <h2 id="website-heading">Website {isPrivacy ? "Privacy Policy" : "Terms of Service"}</h2>
          {/* Static archived practice content, sanitized to text and approved HTML tags at recovery. */}
          <div dangerouslySetInnerHTML={{ __html: (isPrivacy ? privacy : terms).html }} />
        </section>
      </div>
    </article>
  );
}

export function PrivacyPolicy() { return <PolicyPage kind="privacy" />; }
export function TermsAndConditions() { return <PolicyPage kind="terms" />; }
