import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Portfolio from "@/components/Portfolio/Portfolio";
import Articles from "@/components/Articles/Articles";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div id="home">
      {/* Drawer (Header component now renders the drawer) */}
      <Header />
      <main className="transition-[padding] duration-300 md:pl-[var(--sidebar-width,16rem)]">
        {/* Hero - full height, centered, no logo, CTA to scroll */}
        <section className="relative min-h-screen flex items-center justify-center text-center px-4 snap-start snap-always">
          <div className="container max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Hi, I’m <span className="text-[var(--color-primary)]">Dwiki Riyadi</span>.
            </h1>
            <p className="mt-4 text-neutral-300">
              Mobile Developer specializing in Android and Flutter. I love building fast, accessible, and beautiful apps.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#portfolio" className="px-4 py-2 rounded bg-[var(--color-primary)] text-white font-medium hover:opacity-90">View work</a>
              <a href="#contact" className="px-4 py-2 rounded border border-neutral-700 text-neutral-100 font-medium hover:bg-neutral-800">Contact</a>
            </div>
          </div>
          {/* Scroll down CTA */}
          <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-400 hover:text-white text-sm inline-flex items-center gap-2">
            <span>Scroll to explore</span>
            <span aria-hidden>↓</span>
          </a>
        </section>

        <About />
        <Portfolio />
        <Articles />
        <Contact />
      </main>
      <footer className="py-10 border-t mt-10 transition-[padding] duration-300 md:pl-[var(--sidebar-width,16rem)] border-neutral-800">
        <div className="container text-sm text-neutral-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Dwiki Riyadi</span>
          <a href="#home" className="hover:underline">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
