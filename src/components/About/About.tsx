"use client";
import Tab from "@/components/Tab/Tab";

const aboutData = {
  overview: `I'm a mobile developer focused on crafting delightful Android and Flutter experiences. I care about performance, accessibility, and clean design. This portfolio showcases selected work, articles, and ways to reach me.`,
  experience: [
    { role: "Senior Mobile Engineer", company: "Acme Corp", period: "2022 — Present", details: "Lead Android & Flutter initiatives, architected modular design system." },
    { role: "Mobile Developer", company: "Startup XYZ", period: "2019 — 2022", details: "Built and shipped cross‑platform apps to thousands of users." },
  ],
  skills: [
    "Kotlin", "Jetpack Compose", "Android SDK", "Flutter", "Dart", "UI/UX", "Figma", "REST/GraphQL"
  ],
};

export default function About() {
  return (
    <section id="about" className="h-screen flex items-center py-16 scroll-mt-16 snap-start snap-always">
      <div className="container w-full">
        <h2 className="section-title text-center">About Myself</h2>
        <Tab
          items={[
            {
              key: "overview",
              label: "Overview",
              content: (
                <p className="text-neutral-300 leading-7 max-w-2xl mx-auto text-center">{aboutData.overview}</p>
              ),
            },
            {
              key: "experience",
              label: "Experience",
              content: (
                <ul className="space-y-4 max-w-3xl mx-auto">
                  {aboutData.experience.map((e) => (
                    <li key={e.role} className="p-4 rounded border border-neutral-800">
                      <div className="font-semibold">{e.role} · {e.company}</div>
                      <div className="text-sm text-neutral-500">{e.period}</div>
                      <p className="mt-1 text-neutral-300">{e.details}</p>
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              key: "skill",
              label: "Skill",
              content: (
                <div className="flex flex-wrap gap-2 justify-center">
                  {aboutData.skills.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-100 text-sm">{s}</span>
                  ))}
                </div>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
}
