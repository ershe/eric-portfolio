import React, { useState } from "react";
import {
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Calendar,
  Send,
  CheckCircle2,
  Code2,
  Globe,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  badge?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Coltrane Discography",
    category: "Interactive Data & Discography",
    description:
      "An interactive session timeline and historical archive documenting John Coltrane’s legendary recording sessions (1949–1967), personnel lineups, and discography.",
    tags: ["React", "TypeScript", "Interactive Timeline", "Music History"],
    image: "/coltrane.jpg",
    link: "https://coltrane.sheltondesigners.com/",
  },
  {
    id: 2,
    title: "Exercise & Weightlifting Analysis",
    category: "Biomechanics & Fitness",
    description:
      "A performance telemetry and motion analysis tool focused on barbell kinematics, bar-path tracking, and strength training analytics.",
    tags: ["React", "TypeScript", "Data Visualization", "Kinematics"],
    image: "/exercise-analysis.svg",
    link: "https://exercise-analysis.sheltondesigners.com",
    badge: "Work in Progress",
  },
];

export function App() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("submitting");
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/fd9b7215746a30bb124eb23b8315ed54",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Portfolio Message from ${formData.name}`,
            _template: "table",
          }),
        },
      );

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setFormStatus("idle");
        }, 5000);
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      console.error(err);
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-stone-800 selection:bg-stone-200">
      {/* Sticky Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#fbfbf9]/80 backdrop-blur-md border-b border-stone-200/60 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-semibold text-lg tracking-tight text-stone-900 flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 rounded-full bg-stone-900 group-hover:scale-125 transition-transform" />
            <span>Eric</span>
            <span className="text-stone-400 font-normal">/ Portfolio</span>
          </a>

          <nav className="flex items-center gap-1 sm:gap-2">
            <a
              href="#projects"
              className="text-sm font-medium text-stone-600 hover:text-stone-950 px-3 py-1.5 rounded-md hover:bg-stone-200/50 transition-colors">
              Projects
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-stone-600 hover:text-stone-950 px-3 py-1.5 rounded-md hover:bg-stone-200/50 transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-stone-600 hover:text-stone-950 px-3 py-1.5 rounded-md hover:bg-stone-200/50 transition-colors">
              Contact
            </a>
            <Button
              size="sm"
              variant="default"
              className="ml-2 hidden sm:inline-flex"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}>
              Get in Touch
            </Button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-stone-200/70">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/60 text-stone-700 text-xs font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-stone-800" />
              <span>Available for engineering & design collaborations</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
              Building thoughtful, fast, and elegant digital experiences.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-stone-600 font-normal leading-relaxed">
              Hi, I’m <span className="font-semibold text-stone-900">Eric</span>
              . I engineer modern web applications, data-rich interfaces, and
              interactive products using React, TypeScript, and modern tooling.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}>
                Explore Selected Works
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}>
                Contact Me
              </Button>
              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
                  aria-label="GitHub">
                  <Code2 className="w-5 h-5" />
                </a>
                <a
                  href="https://sheltondesigners.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
                  aria-label="Shelton Designers">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Works Section */}
        <section
          id="projects"
          className="py-20 border-b border-stone-200/70 scroll-mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-2">
                Portfolio
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
                Selected Works
              </h2>
            </div>
            <p className="text-sm text-stone-500 max-w-sm">
              Featured interactive applications and specialized engineering
              experiments.
            </p>
          </div>

          {/* Grid - 2 Featured Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-stone-200/80 bg-white/70 hover:shadow-xl hover:border-stone-300 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block relative aspect-[16/10] overflow-hidden bg-stone-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors" />

                    {project.badge && (
                      <div className="absolute top-3 left-3 bg-stone-900/90 text-amber-300 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-md border border-amber-500/30">
                        {project.badge}
                      </div>
                    )}

                    <div className="absolute top-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity bg-stone-900/80 text-white p-2 rounded-full backdrop-blur-sm group-hover:scale-110">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </a>

                  <CardContent className="p-6">
                    <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold text-stone-900 group-hover:text-stone-700 transition-colors">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 hover:underline">
                        {project.title}
                      </a>
                    </h3>
                    <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs font-normal py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-stone-800 hover:text-stone-950 inline-flex items-center gap-1.5 hover:underline">
                      Visit Live Project{" "}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* About Section - Clean layout without portrait */}
        <section
          id="about"
          className="py-20 border-b border-stone-200/70 scroll-mt-16">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-2">
              Background
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-8">
              About Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-5 rounded-xl bg-white/70 border border-stone-200/80">
                <div className="flex items-center gap-2 text-stone-500 text-xs font-medium uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 text-stone-900" /> Location
                </div>
                <div className="text-base font-semibold text-stone-900">
                  New York, NY
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/70 border border-stone-200/80">
                <div className="flex items-center gap-2 text-stone-500 text-xs font-medium uppercase tracking-wider mb-1">
                  <Calendar className="w-3.5 h-3.5 text-stone-900" /> Focus
                </div>
                <div className="text-base font-semibold text-stone-900">
                  Web Apps & Telemetry
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/70 border border-stone-200/80">
                <div className="flex items-center gap-2 text-stone-500 text-xs font-medium uppercase tracking-wider mb-1">
                  <Code2 className="w-3.5 h-3.5 text-stone-900" /> Stack
                </div>
                <div className="text-base font-semibold text-stone-900">
                  TypeScript & React
                </div>
              </div>
            </div>

            <div className="space-y-5 text-stone-600 leading-relaxed text-base sm:text-lg">
              <p>
                I am a front-end engineer and product designer dedicated to
                crafting software that balances aesthetic refinement with
                technical performance.
              </p>
              <p>
                My work spans specialized web applications, data visualization,
                interactive timelines, and biomechanical telemetry tools. I care
                deeply about component modularity, responsive typography,
                intuitive information architecture, and clean, resilient code.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-stone-200/70">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-4">
                Core Tooling & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "React",
                  "Vite",
                  "Next.js",
                  "Tailwind CSS",
                  "Shadcn UI",
                  "Data Visualization",
                  "Web Audio & Kinematics",
                  "Node.js",
                  "Git & CI/CD",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs px-3 py-1 font-medium bg-stone-200/70 text-stone-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - No email address listed */}
        <section id="contact" className="py-20 scroll-mt-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-2">
                Get in touch
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
                Let's work together
              </h2>
              <p className="mt-3 text-stone-600">
                Have a project idea, question, or inquiry? Leave a message below
                and I will get back to you promptly.
              </p>
            </div>

            <Card className="border-stone-200/80 bg-white/80 p-6 sm:p-8 shadow-sm">
              {formStatus === "success" ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <CheckCircle2 className="w-12 h-12 text-stone-900 mb-3 animate-bounce" />
                  <h3 className="text-xl font-bold text-stone-900">
                    Message sent successfully!
                  </h3>
                  <p className="text-sm text-stone-600 mt-1">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  {formStatus === "error" && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>
                        There was a problem sending your message. Please try
                        again.
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Jane Doe"
                        className="w-full rounded-lg border border-stone-300 bg-stone-50/50 px-3.5 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="jane@example.com"
                        className="w-full rounded-lg border border-stone-300 bg-stone-50/50 px-3.5 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me a bit about what you'd like to collaborate on..."
                      className="w-full rounded-lg border border-stone-300 bg-stone-50/50 px-3.5 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 transition resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2"
                    disabled={formStatus === "submitting"}>
                    {formStatus === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </section>
      </main>

      {/* Footer - No email listed */}
      <footer className="border-t border-stone-200/70 py-8 bg-[#f5f5f3]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Eric. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="#projects"
              className="hover:text-stone-800 transition-colors">
              Projects
            </a>
            <a href="#about" className="hover:text-stone-800 transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="hover:text-stone-800 transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-stone-800 transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
