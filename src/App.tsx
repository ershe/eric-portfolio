import React, { useState } from 'react'
import {
  ExternalLink,
  Mail,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Calendar,
  Send,
  CheckCircle2,
  Code2,
  Globe
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Project {
  id: number
  title: string
  category: string
  description: string
  tags: string[]
  image: string
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Minimalist Design System',
    category: 'UI/UX & Engineering',
    description: 'A curated library of accessible, performant, and typography-first web components built with Tailwind CSS.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Radix'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80',
    link: '#',
    github: 'https://github.com'
  },
  {
    id: 2,
    title: 'Atmospheric Photography Series',
    category: 'Visual & Editorial',
    description: 'An editorial exploration of architectural geometry, natural light, and quiet urban environments.',
    tags: ['Creative Direction', 'Photography', 'Curated'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    link: '#'
  },
  {
    id: 3,
    title: 'Financial Analytics Suite',
    category: 'Web Application',
    description: 'Real-time financial telemetry dashboard emphasizing data clarity and responsive information hierarchy.',
    tags: ['React', 'Vite', 'Charts', 'Data Viz'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    link: '#',
    github: 'https://github.com'
  },
  {
    id: 4,
    title: 'Zen Workspace & Tools',
    category: 'Productivity',
    description: 'Distraction-free markdown editor and personal knowledge graph for independent creators and researchers.',
    tags: ['TypeScript', 'Electron', 'Local-First'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80',
    link: '#',
    github: 'https://github.com'
  },
  {
    id: 5,
    title: 'Soundscape & Ambient Audio',
    category: 'Creative Tech',
    description: 'Generative ambient soundscapes synthesized directly in the browser using the Web Audio API.',
    tags: ['Web Audio API', 'React', 'Generative'],
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
    link: '#'
  },
  {
    id: 6,
    title: 'E-commerce Concept',
    category: 'Digital Product',
    description: 'Tactile, content-driven shopping experience celebrating artisanal goods and independent crafts.',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
    link: '#',
    github: 'https://github.com'
  }
]

export function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const categories = ['All', 'UI/UX & Engineering', 'Web Application', 'Visual & Editorial', 'Creative Tech']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setFormSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setFormSubmitted(false)
    }, 4000)
  }

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-stone-800 selection:bg-stone-200">
      {/* Sticky Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#fbfbf9]/80 backdrop-blur-md border-b border-stone-200/60 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold text-lg tracking-tight text-stone-900 flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 rounded-full bg-stone-900 group-hover:scale-125 transition-transform"></span>
            <span>Eric</span>
            <span className="text-stone-400 font-normal">/ Portfolio</span>
          </a>

          <nav className="flex items-center gap-1 sm:gap-2">
            <a href="#projects" className="text-sm font-medium text-stone-600 hover:text-stone-950 px-3 py-1.5 rounded-md hover:bg-stone-200/50 transition-colors">
              Projects
            </a>
            <a href="#about" className="text-sm font-medium text-stone-600 hover:text-stone-950 px-3 py-1.5 rounded-md hover:bg-stone-200/50 transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-stone-600 hover:text-stone-950 px-3 py-1.5 rounded-md hover:bg-stone-200/50 transition-colors">
              Contact
            </a>
            <Button
              size="sm"
              variant="default"
              className="ml-2 hidden sm:inline-flex"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get in Touch
            </Button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Intro Section */}
        <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-stone-200/70">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/60 text-stone-700 text-xs font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-stone-800" />
              <span>Available for new projects & collaborations</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
              Building thoughtful, fast, and elegant digital experiences.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-stone-600 font-normal leading-relaxed">
              Hi, I’m <span className="font-semibold text-stone-900">Eric</span>. I’m a software engineer and designer crafting modern web applications, clean user interfaces, and intuitive products with React, TypeScript, and modern tooling.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Explore Selected Works
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Contact Me
              </Button>
              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
                  aria-label="GitHub"
                >
                  <Code2 className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
                  aria-label="Website"
                >
                  <Globe className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="p-2.5 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Works / Image Grid Section */}
        <section id="projects" className="py-20 border-b border-stone-200/70 scroll-mt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-2">Portfolio</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">Selected Works</h2>
            </div>
            
            {/* Filter tags */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                    activeFilter === cat
                      ? 'bg-stone-900 text-stone-50 shadow-sm'
                      : 'bg-stone-200/60 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-stone-200/80 bg-white/70 hover:shadow-lg hover:border-stone-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/80 text-white p-1.5 rounded-full backdrop-blur-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-stone-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-stone-600 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[11px] font-normal py-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-stone-100">
                    {project.link && (
                      <a
                        href={project.link}
                        className="text-xs font-medium text-stone-700 hover:text-stone-950 inline-flex items-center gap-1 hover:underline"
                      >
                        Live Preview <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-xs font-medium text-stone-700 hover:text-stone-950 inline-flex items-center gap-1 ml-auto hover:underline"
                      >
                        Source <Code2 className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 border-b border-stone-200/70 scroll-mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-2">Background</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">About Me</h2>
              
              <div className="mt-6 relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-100 border border-stone-200/80 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Eric"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 border border-stone-200/70 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-stone-700">
                    <MapPin className="w-3.5 h-3.5 text-stone-900" />
                    <span>Based in New York, NY</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>5+ Years Exp</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 text-stone-600 leading-relaxed text-base sm:text-lg">
              <p>
                I am a front-end engineer and product enthusiast dedicated to engineering software that strikes a balance between aesthetic discipline and technical excellence.
              </p>
              <p>
                My focus spans across crafting robust component architectures, intuitive user journeys, and highly responsive web applications. I care deeply about micro-interactions, accessibility (a11y), clean semantic markups, and rapid rendering performance.
              </p>
              <p>
                When I’m not immersed in code, you’ll usually find me exploring architectural photography, testing emerging developer tools, or sipping pour-over coffee.
              </p>

              <div className="mt-4 pt-6 border-t border-stone-200/70">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-900 mb-4">Core Tooling & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'TypeScript',
                    'React',
                    'Vite',
                    'Next.js',
                    'Tailwind CSS',
                    'Shadcn UI',
                    'Node.js',
                    'Git',
                    'REST & GraphQL',
                    'Figma'
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs px-3 py-1 font-medium bg-stone-200/70 text-stone-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 scroll-mt-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-2">Get in touch</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">Let's work together</h2>
              <p className="mt-3 text-stone-600">
                Have an idea, project, or simply want to chat? Send me a message below or email me directly at{' '}
                <a href="mailto:eric@example.com" className="text-stone-900 font-semibold underline underline-offset-4 hover:text-stone-700">
                  eric@example.com
                </a>.
              </p>
            </div>

            <Card className="border-stone-200/80 bg-white/80 p-6 sm:p-8 shadow-sm">
              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <CheckCircle2 className="w-12 h-12 text-stone-900 mb-3 animate-bounce" />
                  <h3 className="text-xl font-bold text-stone-900">Message sent successfully!</h3>
                  <p className="text-sm text-stone-600 mt-1">Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me a bit about what you are looking to build..."
                      className="w-full rounded-lg border border-stone-300 bg-stone-50/50 px-3.5 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 transition resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="w-4 h-4" /> Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200/70 py-8 bg-[#f5f5f3]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Eric. Crafted with React, Vite & Tailwind CSS.</p>
          <div className="flex items-center gap-6">
            <a href="#projects" className="hover:text-stone-800 transition-colors">Projects</a>
            <a href="#about" className="hover:text-stone-800 transition-colors">About</a>
            <a href="#contact" className="hover:text-stone-800 transition-colors">Contact</a>
            <a href="#" className="hover:text-stone-800 transition-colors">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
