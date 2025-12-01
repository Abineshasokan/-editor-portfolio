import Image from "next/image";
import ParallaxHero from "@/components/ui/ParallaxHero";
import ProjectCard from "@/components/ui/ProjectCard";
import ContactSection from "@/components/ui/ContactSection";

const projects = [
  {
    title: "Google Drive Portfolio",
    description: "Access my complete library of video edits, raw footage, and project files directly on Google Drive.",
    tags: ["Cloud Storage", "Portfolio", "Raw Files"],
    image: "https://placehold.co/600x400/1F1F1F/00FFFF/png?text=Google+Drive",
    demoLink: "https://drive.google.com/drive/folders/1uGB2XZtTMUnt5KnRWBsXk-DPju718zaa?usp=sharing",
    repoLink: ""
  },
  {
    title: "YouTube Channel",
    description: "Explore my cinematic titles, branding content, and YouTube Shorts. Subscribe for high-quality visual storytelling.",
    tags: ["Video Content", "Shorts", "Cinematic"],
    image: "https://placehold.co/600x400/FF0000/FFFFFF/png?text=YouTube",
    demoLink: "https://youtube.com/@nesh_aura_fx?si=yH4gTerXDXYfIe4f",
    repoLink: ""
  },
  {
    title: "Instagram Page",
    description: "Follow for daily reels, behind-the-scenes updates, and instant motion design showcases.",
    tags: ["Social Media", "Reels", "Branding"],
    image: "https://placehold.co/600x400/C13584/FFFFFF/png?text=Instagram",
    demoLink: "https://www.instagram.com/abin_esh_26?igsh=amVpc2xvZjBidTg1",
    repoLink: ""
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParallaxHero />

      <section id="projects" className="py-20 px-6 relative z-10 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            FEATURED <span className="text-accent">PROJECTS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} index={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 relative z-10 bg-black/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">ABOUT <span className="text-accent">ME</span></h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Picture */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
              <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-2 border-accent/50 overflow-hidden">
                <Image
                  src="/profile-pic.png"
                  alt="Abinesh"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div className="text-gray-300 text-lg leading-relaxed space-y-6 text-center md:text-left">
              <p>
                I'm <span className="text-accent font-bold">Abinesh</span>, a passionate video editor with 8 months of hands-on experience in social media editing.
                I'm proficient in using editing tools like DaVinci Resolve, Premiere Pro, and After Effects.
                I've honed my skills through dedicated courses in social media editing, ensuring that I can bring creativity and efficiency.
              </p>
              <div className="font-mono text-base space-y-2 text-gray-400">
                <p>🚀 Video Editor | Motion Designer</p>
                <p>🎥 Reels • YouTube Shorts • Cinematic Titles • Branding Content</p>
                <p>👨‍💻 Founder of NeshAuraFx</p>
                <p className="text-accent">💌 Let’s create stories that stick</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      <footer className="py-8 text-center text-gray-500 text-sm relative z-10 border-t border-white/5 bg-black">
        <p>© {new Date().getFullYear()} NeshAuraFx. All rights reserved.</p>
      </footer>
    </main>
  );
}
