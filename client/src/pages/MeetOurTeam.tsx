import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

function FadeSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className="fade-up">{children}</div>;
}

const team = [
  { name: "Hans Valkenburg", img: "/manus-storage/team-hans_caa2ef2d.jpg", linkedin: "https://www.linkedin.com/in/hansvalkenburg/" },
  { name: "Kees Huibers", img: "/manus-storage/team-kees_9c68edc2.jpg", linkedin: "https://www.linkedin.com/in/keeshuibers/" },
  { name: "Lydia Huibers-Slomp", img: "/manus-storage/team-lydia_5b924f4b.jpg", linkedin: "https://www.linkedin.com/in/lydia-huibers-slomp-864b14178/" },
  { name: "Janne Reedeker", img: "/manus-storage/team-janne_6e1d1a39.jpg", linkedin: "https://www.linkedin.com/in/janne-reedeker-6a55b9236/" },
  { name: "Shakira Nasser", img: "/manus-storage/team-shakira_eb467108.jpg", linkedin: "https://www.linkedin.com/in/shakira-nasser-ba7918133/" },
];

export default function MeetOurTeam() {
  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block">About us</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>Meet Our Team</h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container">
          <FadeSection>
            <p className="text-[#2C2416] text-lg leading-relaxed mb-12 max-w-2xl" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              The Ubuntu Leadership Team consists of both Dutch and Tanzanian team members, united by a shared mission and vision to create a brighter future for the Usambara region.
            </p>
          </FadeSection>
          <FadeSection delay={60}>
            <span className="ulp-label ulp-label-outline mb-8 inline-block">The Initiators</span>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {team.map((member, i) => (
              <FadeSection key={member.name} delay={i * 70}>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="overflow-hidden mb-3">
                    <img src={member.img} alt={member.name} className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <p className="font-semibold text-[#2C2416] text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.04em" }}>{member.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#D4521A" }}>LinkedIn →</p>
                </a>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
