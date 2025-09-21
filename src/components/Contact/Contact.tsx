"use client";
import { useRef, useState } from "react";

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/dwikiriyadi", svg: (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.2 2.5-2.5 5.1-2.5C22.6 7.7 24 10.1 24 14.1V24h-5v-8.7c0-2.1-.1-4.7-2.9-4.7-2.9 0-3.3 2.3-3.3 4.6V24H8z"/></svg>) },
  { name: "Medium", href: "https://medium.com/@dwikiriyadi", svg: (<svg width="20" height="20" viewBox="0 0 1043.63 592.71" fill="currentColor"><path d="M588.67 296.45c0 163.69-131.36 296.26-293.39 296.26S1.89 460.14 1.89 296.45 133.25.19 295.28.19s293.39 132.57 293.39 296.26"/><path d="M772.33 296.45c0 154.21-65.68 279.26-146.74 279.26S478.85 450.66 478.85 296.45 544.53 17.19 625.59 17.19s146.74 125.05 146.74 279.26"/><path d="M1043.63 296.45c0 141.88-23.45 256.8-52.37 256.8s-52.37-114.92-52.37-256.8 23.45-256.8 52.37-256.8 52.37 114.92 52.37 256.8"/></svg>) },
  { name: "Instagram", href: "https://instagram.com", svg: (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/></svg>) },
  { name: "YouTube", href: "https://youtube.com", svg: (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.4.6A3 3 0 00.5 6.2 31.7 31.7 0 000 12a31.7 31.7 0 00.5 5.8A3 3 0 002.6 20c2.1.6 9.4.6 9.4.6s7.3 0 9.4-.6a3 3 0 002.1-2.1c.4-1.9.5-3.9.5-5.9 0-2-.1-4-.5-5.8zM9.8 15.5V8.5L16 12l-6.2 3.5z"/></svg>) },
  { name: "GitHub", href: "https://github.com/dwikiriyadi", svg: (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8-.8 1.7-1.4-.9-.1-1.9-.5-1.9-2.3 0-.5.2-1 .5-1.4-.1-.1-.3-.7.1-1.6 0 0 .8-.3 2.6 1 .8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c1.8-1.3 2.6-1 2.6-1 .4.9.2 1.5.1 1.6.3.4.5.9.5 1.4 0 1.8-1 2.1-2 2.3.9.8 1.2 1.7 1.2 2.7v4c0 .3.2.6.7.5C19.1 20.1 22 16.4 22 12c0-5.5-4.5-10-10-10z"/></svg>) },
];

export default function Contact() {
  const [cooldown, setCooldown] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (cooldown) return;
    const form = formRef.current!;
    const data = new FormData(form);
    // Honeypot field named "website" — if filled, ignore submission
    if ((data.get("website") as string)?.trim()) {
      setCooldown(true);
      setTimeout(() => setCooldown(false), 3000);
      return;
    }
    const fullName = String(data.get("fullName") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "").trim() || `New request from ${fullName || "your website"}`;
    const message = String(data.get("message") || "");
    const body = `From: ${fullName}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:hello@dwikiriyadi.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setCooldown(true);
    setTimeout(() => setCooldown(false), 4000);
    (e.target as HTMLFormElement).reset();
  }
  return (
    <section id="contact" className="h-screen flex items-center py-16 scroll-mt-16 snap-start snap-always">
      <div className="container w-full">
        <h2 className="section-title text-center">Contact</h2>
        <p className="text-neutral-300 max-w-2xl mx-auto text-center">I'm open to collaboration, freelance projects, and speaking opportunities. Reach out via the form or connect on social media.</p>

        {/* Contact form */}
        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {/* Honeypot */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div>
            <label className="block text-sm text-neutral-400 mb-1">Full Name</label>
            <input required name="fullName" type="text" className="w-full rounded border border-neutral-800 bg-neutral-950 px-3 py-2 text-white outline-none focus:border-neutral-600" />
          </div>
          <div>
            <label className="block text-sm text-neutral-400 mb-1">Email</label>
            <input required name="email" type="email" className="w-full rounded border border-neutral-800 bg-neutral-950 px-3 py-2 text-white outline-none focus:border-neutral-600" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-neutral-400 mb-1">Subject</label>
            <input required name="subject" type="text" className="w-full rounded border border-neutral-800 bg-neutral-950 px-3 py-2 text-white outline-none focus:border-neutral-600" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-neutral-400 mb-1">Email Content</label>
            <textarea required name="message" rows={5} className="w-full rounded border border-neutral-800 bg-neutral-950 px-3 py-2 text-white outline-none focus:border-neutral-600" />
          </div>
          <div className="sm:col-span-2 flex items-center justify-center gap-3">
            <button type="submit" disabled={cooldown} className={`px-4 py-2 rounded bg-[var(--color-primary)] text-white font-medium ${cooldown ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"}`}>Send</button>
          </div>
        </form>

        {/* Socials */}
        <div className="flex flex-wrap gap-3 mt-8 items-center justify-center">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" aria-label={s.name} className="p-3 rounded-full border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700 transition-colors text-neutral-200">
              {s.svg}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
