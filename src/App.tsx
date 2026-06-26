import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/ui/animated-shader-hero";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { RevealText } from "@/components/ui/reveal-text";
import { Marquee } from "@/components/ui/marquee";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { GlowingShadow } from "@/components/ui/glowing-shadow";
import { SectionLabel } from "@/components/SectionLabel";
import { SchedulePreview } from "@/components/schedule/SchedulePreview";

/* ─── Social Icons ─── */
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.397-.875-.609-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.637.873-1.31 1.226-2.01a.077.077 0 0 0-.042-.107 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.713 10.713 0 0 0 .372-.294.075.075 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.198.373.295a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.77 1.372 1.225 2.01a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-4.718-.838-8.812-3.54-12.46a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.966-2.157 2.157-2.157 1.193 0 2.169.964 2.157 2.157 0 1.19-.966 2.156-2.157 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.966-2.157 2.157-2.157 1.192 0 2.169.964 2.157 2.157 0 1.19-.965 2.156-2.157 2.156z" />
  </svg>
);

/* ─── About Section ─── */
function AboutSection() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-4">
          <div className="overflow-hidden">
            <RevealText
              as="h2"
              className="font-display italic text-3xl md:text-4xl text-[#d4af7a]"
              stagger={0.04}
            >
              The league
            </RevealText>
          </div>
        </div>

        <div className="md:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-white/90 tracking-[-0.01em]"
          >
            <span className="text-white/90">Dash Racing Sprint</span>
            <span className="text-white/40"> is a competitive racing league where every sprint matters. Founded by </span>
            <span className="text-[#d4af7a] italic">DaJaKa and AlJaKa</span>
            <span className="text-white/40">, the league brings together 22 drivers across 11 constructors to compete in a professional, multi-round championship season.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10"
          >
            {[
              { value: "22", label: "Drivers" },
              { value: "11", label: "Constructors" },
              { value: "18", label: "Races" },
              { value: "R$ 15K", label: "Prize Pool" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
              >
                <div className="font-display text-5xl md:text-6xl text-white mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Constructor Marquee ─── */
function ConstructorMarquee() {
  const constructors = [
    "Red Bull Racing",
    "McLaren OKX",
    "Scuderia Ferrari",
    "Mercedes-AMG Petronas",
    "Alpine F1 Team",
    "Visa Cashapp RB",
    "MoneyGram Haas",
    "Aston Martin F1 Team",
    "Williams Racing",
    "Cadillac F1 Team",
    "Audi F1 Team",
  ];

  return (
    <section className="py-20 px-4">
      <Marquee items={constructors} separator="✦" speed="normal" />
      <div className="mt-8">
        <Marquee items={constructors.slice().reverse()} separator="◆" speed="slow" />
      </div>
    </section>
  );
}

/* ─── Services Section ─── */
function ServicesSection() {
  const services = [
    {
      num: "01",
      title: "Professional League Structure",
      desc: "A structured, multi-round championship season with consistent scheduling, clear regulations, and professional race direction.",
    },
    {
      num: "02",
      title: "Cash Prize Competition",
      desc: "Significant prize pool distributed across the season. Top drivers and constructors earn real rewards for their performance.",
    },
    {
      num: "03",
      title: "Global Driver Grid",
      desc: "22 skilled drivers from around the world competing at the highest level of sim racing.",
    },
    {
      num: "04",
      title: "Constructor Championship",
      desc: "11 teams battle for constructor honors. Every point scored contributes to the team standings.",
    },
    {
      num: "05",
      title: "Sprint-Focused Format",
      desc: "Races designed around sprint distance. Every overtake, every lap, every tenth of a second matters.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-20 max-w-3xl">
        <div className="overflow-hidden">
          <RevealText
            as="h2"
            className="font-display text-5xl md:text-7xl text-white leading-[1.05]"
            stagger={0.03}
          >
            A racing league built on
          </RevealText>
        </div>
        <div className="overflow-hidden mt-2">
          <RevealText
            as="h2"
            className="font-display italic text-5xl md:text-7xl text-[#d4af7a] leading-[1.05]"
            stagger={0.03}
            delay={0.3}
          >
            precision and rivalry.
          </RevealText>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {services.map((service, i) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-12 group border-t border-white/10 py-10 md:py-12 hover:bg-white/[0.02] transition-all duration-500 cursor-pointer"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-1 font-mono text-xs text-[#d4af7a] pt-2">
                ({service.num})
              </div>
              <div className="md:col-span-5">
                <h3 className="font-display text-3xl md:text-4xl text-white leading-tight">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-white/50 text-base leading-relaxed max-w-md">
                  {service.desc}
                </p>
              </div>
              <div className="md:col-span-1 flex justify-end pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight className="w-5 h-5 text-[#d4af7a]" />
              </div>
            </div>
          </motion.div>
        ))}
        <div className="md:col-span-12 border-t border-white/10" />
      </div>
    </section>
  );
}

/* ─── Showcase Section ─── */
function ShowcaseSection() {
  return (
    <section className="py-20 px-4 md:px-8">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4 px-6">
            <div className="overflow-hidden">
              <RevealText
                as="h2"
                className="font-display text-5xl md:text-7xl text-white text-center leading-[1.05]"
                stagger={0.03}
              >
                Every sprint, every
              </RevealText>
            </div>
            <div className="overflow-hidden">
              <RevealText
                as="h2"
                className="font-display italic text-5xl md:text-7xl text-[#d4af7a] text-center leading-[1.05]"
                stagger={0.03}
                delay={0.3}
              >
                second matters.
              </RevealText>
            </div>
          </div>
        }
      >
        <div className="bg-gradient-to-b from-black via-[#0a0a0a] to-black rounded-lg p-8 md:p-12 h-full flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,122,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,122,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative z-10 text-center space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af7a]/20 bg-[#d4af7a]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af7a] animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#d4af7a]">
                Live Standings
              </span>
            </div>

            <div className="space-y-4">
              {[
                { pos: "1", driver: "Pedro098t", team: "Red Bull Racing", pts: "177", highlight: true },
                { pos: "2", driver: "allendsc", team: "Red Bull Racing", pts: "165", highlight: false },
                { pos: "3", driver: "hx4pi", team: "McLaren OKX", pts: "93", highlight: false },
              ].map((row) => (
                <div
                  key={row.pos}
                  className={`flex items-center justify-between px-5 py-3 rounded-lg border transition-all ${
                    row.highlight
                      ? "bg-[#d4af7a]/10 border-[#d4af7a]/30"
                      : "bg-white/[0.02] border-white/5 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className={`font-display text-2xl ${
                      row.highlight ? "text-[#d4af7a]" : "text-white/40"
                    }`}>
                      {row.pos}
                    </span>
                    <div className="text-left">
                      <div className={`font-medium text-sm ${
                        row.highlight ? "text-white" : "text-white/80"
                      }`}>
                        {row.driver}
                      </div>
                      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">
                        {row.team}
                      </div>
                    </div>
                  </div>
                  <div className={`font-display text-2xl ${
                    row.highlight ? "text-[#d4af7a]" : "text-white/60"
                  }`}>
                    {row.pts}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}

/* ─── Testimonial Section ─── */
function TestimonialSection() {
  const testimonials = [
    {
      initial: "D",
      name: "DaJaKa",
      title: "Owner · Dash Racing Sprint",
      quote: "Since assuming leadership of DRS, our focus has been clear: build a premier racing community. The success of DRS is a reflection of the incredible people who make up this community.",
    },
    {
      initial: "A",
      name: "AlJaKa",
      title: "Owner · Dash Racing Sprint",
      quote: "Leading DRS has been an extraordinary journey. We have successfully executed competitive campaigns and welcomed new members. I am incredibly proud of our strategic expansion.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-20 max-w-3xl">
        <RevealText
          as="h2"
          className="font-display text-5xl md:text-7xl text-white leading-[1.05]"
          stagger={0.03}
        >
          Words from
        </RevealText>
        <RevealText
          as="h2"
          className="font-display italic text-5xl md:text-7xl text-[#d4af7a] leading-[1.05]"
          stagger={0.03}
          delay={0.3}
        >
          the owners.
        </RevealText>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: i * 0.15 }} className="relative">
            <blockquote className="font-display italic text-lg md:text-xl lg:text-2xl leading-[1.35] text-white/90">
              <span className="text-[#d4af7a] not-italic text-4xl">"</span>
              {t.quote}
              <span className="text-[#d4af7a] not-italic text-4xl">"</span>
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af7a] to-[#8b6f3e] flex items-center justify-center font-display text-xl text-black">
                {t.initial}
              </div>
              <div>
                <div className="text-white font-medium">{t.name}</div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
                  {t.title}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CTASection() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto relative z-10 text-center">
        <SectionLabel index="10" label="Get Started" />
        <div className="overflow-hidden inline-block">
          <RevealText
            as="h2"
            className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-[0.95]"
            stagger={0.025}
          >
            Ready to race?
          </RevealText>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 text-white/50 text-lg max-w-xl mx-auto"
        >
          Join the DRS League community. Compete against the best drivers in a professional environment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 inline-flex items-center gap-3"
        >
          <button
            onClick={() => window.open("https://discord.gg/xt2p9mmD9N", "_blank")}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#d4af7a] hover:bg-[#e8c989] text-black font-medium rounded-full transition-all"
          >
            <DiscordIcon className="w-5 h-5" />
            <span>Join Discord Server</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display text-2xl text-white mb-4">DRS®</h3>
            <p className="text-white/40">Est. 2024</p>
          </div>
          {[
            {
              title: "League",
              links: [
                { label: "Standings", href: "/standings" },
                { label: "Schedule", href: "/schedule" },
              ],
            },
            {
              title: "Resources",
              links: [
                { label: "Regulations", href: "#" },
                { label: "Contact", href: "#" },
              ],
            },
            {
              title: "Connect",
              links: [
                { label: "Discord", href: "https://discord.gg/xt2p9mmD9N" },
                { label: "YouTube", href: "https://youtube.com/@drs-apex" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 mb-5">
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#d4af7a] text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-10 border-t border-white/5 text-center">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30">
            © 2026 Dash Racing Sprint. Founded by DaJaKa & AlJaKa.
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ─── */
export default function App() {
  const [showContent, setShowContent] = useState(true);

  return (
    <div className="bg-black min-h-screen">
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <AboutSection />
            <ConstructorMarquee />
            <ServicesSection />
            <ShowcaseSection />
            <TestimonialSection />
            <SchedulePreview />
            <CTASection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}