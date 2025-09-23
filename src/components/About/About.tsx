"use client";
import { useEffect, useMemo, useState } from "react";
import Tab from "@/components/Tab/Tab";
import { Briefcase, X, DownloadSimple } from "@phosphor-icons/react";
import { OVERVIEW_TEXT, EXPERIENCES, SKILLS } from "@/data/about";
import AccordionItem from "@/components/Accordion/Accordion";

export default function About() {
  const [activeKey, setActiveKey] = useState<string>("overview");
  const [showDownload, setShowDownload] = useState<boolean>(false);
  // Close on Escape when dialog is open
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setShowDownload(false);
    }
    if (showDownload) {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [showDownload]);

  const subtitle = useMemo(() => {
    switch (activeKey) {
      case "overview":
        return "Who am I & What I do";
      case "experience":
        return "Where I've contribute & grown";
      case "skill":
        return "What I bring to the table";
      default:
        return "";
    }
  }, [activeKey]);

  return (
    <section id="about" className="min-h-[var(--app-height,100vh)] py-16 scroll-mt-16 md:scroll-mt-2 snap-start snap-always flex items-center">
      <div className="container w-full">
        <h2 className="section-title text-center">About Myself</h2>
        {subtitle && <p className="text-center text-neutral-400 mt-1">{subtitle}</p>}
        <div className="mt-6">
          <Tab
            activeKey={activeKey}
            onChange={setActiveKey}
            items={[
              {
                key: "overview",
                label: "Overview",
                content: (
                  <div className="max-w-3xl mx-auto text-center">
                    <p className="text-neutral-300 leading-7 whitespace-pre-line">{OVERVIEW_TEXT}</p>
                    <div className="mt-6 flex items-center justify-center">
                      <button type="button" onClick={() => setShowDownload(true)} className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[var(--color-primary)] text-white hover:opacity-90" aria-label="Download Resume or Portfolio">
                        <DownloadSimple size={18} /> Download Resume/Portfolio
                      </button>
                      {showDownload && (
                        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
                          <div className="absolute inset-0 bg-black/60" onClick={() => setShowDownload(false)} />
                          <div className="absolute inset-x-0 bottom-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[420px] rounded-t-2xl md:rounded-xl bg-neutral-900 border border-neutral-800 p-4 shadow-xl">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-white font-semibold">Choose file to download</h3>
                                <p className="text-sm text-neutral-400">Select a document</p>
                              </div>
                              <button type="button" onClick={() => setShowDownload(false)} className="p-2 text-neutral-400 hover:text-neutral-200">
                                <X size={18} />
                              </button>
                            </div>
                            <div className="mt-4 space-y-3">
                              <a href="/Dwiki_Riyadi_Resume.pdf" download className="flex items-center justify-between p-3 rounded border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/50">
                                <span className="text-neutral-100">Resume (PDF)</span>
                                <span className="text-xs text-neutral-500">.pdf</span>
                              </a>
                              <a href="/portfolio.pdf" download className="flex items-center justify-between p-3 rounded border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/50">
                                <span className="text-neutral-100">Portfolio (PDF)</span>
                                <span className="text-xs text-neutral-500">.pdf</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ),
              },
              {
                key: "experience",
                label: "Experience",
                content: (
                  <ul className="space-y-3 max-w-3xl mx-auto">
                    {EXPERIENCES.map((e, idx) => (
                      <AccordionItem
                        key={idx}
                        title={
                          <div className="flex items-center gap-3">
                            <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                              <Briefcase size={24} className="text-neutral-400" />
                            </div>
                            <div>
                              <div className="text-sm text-neutral-400">{e.company} <span className="mx-1">|</span> {e.location} <span className="mx-1">|</span> {e.employment}</div>
                              <div className="font-semibold text-white">{e.role}</div>
                              <div className="text-xs text-neutral-500">{e.period}</div>
                            </div>
                          </div>
                        }
                      >
                        <div className="text-neutral-300 text-sm leading-6 whitespace-pre-line">{e.details || "Details will be added soon."}</div>
                      </AccordionItem>
                    ))}
                  </ul>
                ),
              },
              {
                key: "skill",
                label: "Skill",
                content: (
                  <div>
                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-5">
                      {SKILLS.map((s) => (
                        <li key={s.key} className="rounded border border-neutral-800 p-4 h-full">
                          <div className="flex flex-col items-center text-center gap-3">
                            <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                              <s.Icon size={24} className="text-neutral-400" />
                            </div>
                            <div>
                              <div className="font-semibold text-white">{s.title}</div>
                              <p className="text-sm text-neutral-400 mt-0.5">{s.desc}</p>
                            </div>
                            <div className="mt-3 flex flex-wrap justify-center gap-2">
                              {s.tags.map((t) => (
                                <span key={t} className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-100 text-xs">{t}</span>
                              ))}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
}

