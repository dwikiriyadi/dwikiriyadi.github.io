"use client";
import { useRef, useState } from "react";
import { SOCIAL_LINKS } from "@/data/socials";

interface Toast {
  type: "success" | "error";
  message: string;
}

export default function Contact() {
  const [cooldown, setCooldown] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function showToast(message: string, type: Toast["type"]) {
    setToast({ message, type });
    // Auto hide after 4 seconds
    window.setTimeout(() => setToast(null), 4000);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (cooldown) return;
    const form = formRef.current!;
    const data = new FormData(form);
    // Honeypot field named "website" — if filled, ignore submission
    if ((data.get("website") as string)?.trim()) {
      setCooldown(true);
      showToast("Submission blocked.", "error");
      setTimeout(() => setCooldown(false), 3000);
      return;
    }
    const fullName = String(data.get("fullName") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "").trim() || `New request from ${fullName || "your website"}`;
    const message = String(data.get("message") || "");

    const endpoint = process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT; // e.g. https://formsubmit.co/ajax/youremail@example.com
    if (!endpoint) {
      showToast("FormSubmit is not configured. Please set NEXT_PUBLIC_FORMSUBMIT_ENDPOINT.", "error");
      return;
    }

    // Build a FormSubmit payload. See https://formsubmit.co/ for available fields
    const payload = {
      fullName,
      email,
      subject,
      message,
      _subject: subject,
      _replyto: email,
      _captcha: false,
    } as const;

    try {
      setCooldown(true);
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`FormSubmit request failed: ${res.status}`);
      }

      showToast("Message sent successfully. Thank you!", "success");
      (e.target as HTMLFormElement).reset(); // clear the form after success
    } catch (err) {
      console.error(err);
      showToast("Failed to send message. Please try again.", "error");
    } finally {
      setTimeout(() => setCooldown(false), 1200);
    }
  }
  return (
    <section id="contact" className="relative overflow-hidden min-h-[var(--app-height,100vh)] flex items-center py-16 scroll-mt-16 md:scroll-mt-2 snap-start snap-always">
      {/* Light diagonal background similar to Portfolio (reversed angle) */}
      <div className="absolute inset-0 -z-10 bg-[#FFFFFF] [clip-path:polygon(0_0,100%_6vw,100%_100%,0%_calc(100%_-_6vw))]" aria-hidden></div>
      <div className="container w-full text-[#212121]">
        <h2 className="section-title text-center text-[#212121]">Contact</h2>
        <p className="text-center text-neutral-600 mt-1">Let&apos;s Connect & Collaborate</p>
        <p className="text-neutral-700 max-w-2xl mx-auto text-center mt-4">
          <span className="text-[var(--color-primary)]">Interest in collaborating ? </span>
          I&apos;m open to collaboration, freelance projects, and speaking opportunities. Reach out via the form or connect on social media.
        </p>

        {/* Contact form */}
        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {/* Honeypot */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div>
            <label className="block text-sm text-neutral-600 mb-1">Full Name</label>
            <input required name="fullName" type="text" className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-[#212121] outline-none focus:border-neutral-500" />
          </div>
          <div>
            <label className="block text-sm text-neutral-600 mb-1">Email</label>
            <input required name="email" type="email" className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-[#212121] outline-none focus:border-neutral-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-neutral-600 mb-1">Subject</label>
            <input required name="subject" type="text" className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-[#212121] outline-none focus:border-neutral-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-neutral-600 mb-1">Message</label>
            <textarea required name="message" rows={5} className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-[#212121] outline-none focus:border-neutral-500" />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between gap-3">
            <button type="submit" disabled={cooldown} className={`px-4 py-2 rounded bg-[var(--color-primary)] text-white font-medium ${cooldown ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"}`}>{cooldown ? "Sending…" : "Send Message"}</button>
            <div className="flex items-center gap-3">
              <span className="text-neutral-600 text-sm">Find me on</span>
              <div className="flex flex-wrap gap-2 items-center">
                {SOCIAL_LINKS.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" aria-label={s.name} className="p-2 rounded-full border border-neutral-300 hover:bg-neutral-100 hover:border-neutral-400 transition-colors text-[#212121]">
                    <s.Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Floating toast notification */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div
            className={`max-w-[90vw] sm:max-w-md px-4 py-2 rounded border backdrop-blur bg-neutral-900/85 shadow-lg flex items-center gap-2 ${
              toast.type === "success" ? "border-green-700 text-green-300" : "border-red-700 text-red-300"
            }`}
          >
            <span aria-hidden>{toast.type === "success" ? "✔" : "✖"}</span>
            <span className="text-sm font-medium">{toast.message}</span>
          </div>
        </div>
      )}
    </section>
  );
}
