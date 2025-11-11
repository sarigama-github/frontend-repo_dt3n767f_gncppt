import { useState, useEffect } from 'react'
import { Menu, Phone, Mail, Star, Hammer, Building2, Ruler, Wrench } from 'lucide-react'

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const onScroll = () => setMobileOpen(false)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'What We Do' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-amber-600" />
            <span className="font-semibold tracking-tight text-lg">[business name]</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                {n.label}
              </button>
            ))}
            <a href="tel:[contact info]" className="inline-flex items-center gap-2 bg-amber-600 text-white px-3 py-2 rounded-md text-sm font-semibold shadow hover:bg-amber-700">
              <Phone className="h-4 w-4" /> Call
            </a>
          </nav>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-4 py-3 grid gap-2">
              {navItems.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left text-sm py-2">
                  {n.label}
                </button>
              ))}
              <a href="tel:[contact info]" className="inline-flex items-center gap-2 bg-amber-600 text-white px-3 py-2 rounded-md text-sm font-semibold w-max">
                <Phone className="h-4 w-4" /> Call
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-white">
          <div className="max-w-2xl">
            <p className="uppercase tracking-widest text-amber-300 text-xs mb-3">Trusted Building Professionals</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Quality construction, renovations, and maintenance for every project size
            </h1>
            <p className="mt-4 text-white/90 leading-relaxed">
              We deliver dependable building services with a focus on safety, craftsmanship, and clear communication. From small fixes to large-scale builds, we help bring your vision to life.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <button onClick={() => scrollTo('contact')} className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 rounded-md shadow">
                Get a Quote
              </button>
              <button onClick={() => scrollTo('services')} className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-md">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow relative">
              <div
                className="h-80 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI4MTk5MTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
                }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">About [business name]</h2>
              <p className="text-gray-600 leading-relaxed">
                We are a versatile building company providing reliable construction and property services to homeowners, businesses, and developers. Our team combines practical experience with a commitment to quality to deliver projects on time and within budget.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg border">
                  <p className="text-2xl font-extrabold text-amber-600">10+ yrs</p>
                  <p className="text-sm text-gray-600">Industry Experience</p>
                </div>
                <div className="p-4 bg-white rounded-lg border">
                  <p className="text-2xl font-extrabold text-amber-600">100%</p>
                  <p className="text-sm text-gray-600">Quality Focus</p>
                </div>
                <div className="p-4 bg-white rounded-lg border">
                  <p className="text-2xl font-extrabold text-amber-600">5★</p>
                  <p className="text-sm text-gray-600">Client Feedback</p>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Fully insured. Health & safety compliant. References available upon request. Serving [location/area].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-3">What We Do</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Comprehensive building solutions tailored to your needs. Choose a single service or a complete package for end-to-end delivery.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard icon={<Hammer className="h-6 w-6 text-amber-600" />} title="General Construction" desc="Foundations, framing, extensions, and structural works handled with precision and care." />
            <ServiceCard icon={<Ruler className="h-6 w-6 text-amber-600" />} title="Renovations & Refits" desc="Kitchens, bathrooms, interiors, and full property refurbishments with minimal disruption." />
            <ServiceCard icon={<Wrench className="h-6 w-6 text-amber-600" />} title="Repairs & Maintenance" desc="Prompt, reliable repairs and preventative maintenance to keep properties in top condition." />
            <ServiceCard icon={<Building2 className="h-6 w-6 text-amber-600" />} title="Commercial Projects" desc="Office fit-outs, retail spaces, and light industrial projects delivered to specification." />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-3">What Clients Say</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Real feedback from happy customers. Replace with your own testimonials any time.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: '[client name]',
                text:
                  'Professional, tidy, and delivered exactly what was promised. The finish is excellent and the team was great to work with.',
              },
              {
                name: '[client name]',
                text:
                  'Clear communication throughout and a dependable schedule. We are very pleased with the results and would recommend them.',
              },
              {
                name: '[client name]',
                text:
                  'High-quality workmanship and attention to detail. The project was completed on time and within the agreed budget.',
              },
            ].map((r, i) => (
              <div key={i} className="bg-white rounded-xl border p-6 shadow-sm">
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <p className="text-gray-700 leading-relaxed">{r.text}</p>
                <p className="mt-4 text-sm font-semibold">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Tell us about your project and we’ll get back to you to discuss options, timelines, and pricing. For urgent enquiries, call us directly.
              </p>
              <div className="space-y-3">
                <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-amber-600" /> <span>[contact info]</span></p>
                <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-amber-600" /> <span>[contact info]</span></p>
                <p className="flex items-center gap-2"><Building2 className="h-5 w-5 text-amber-600" /> <span>[address / service area]</span></p>
              </div>
              <p className="mt-6 text-sm text-gray-500">Working hours: Mon–Fri, 8:00–17:00 (appointments available)</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded-xl border shadow-sm p-6 grid gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" placeholder="Your full name" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" placeholder="you@example.com" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input type="tel" placeholder="[contact number]" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Project Type</label>
                <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option>General Construction</option>
                  <option>Renovation</option>
                  <option>Repair / Maintenance</option>
                  <option>Commercial</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea rows="4" placeholder="Tell us about your project..." className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
              <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 rounded-md">Send Enquiry</button>
              <p className="text-xs text-gray-500">By submitting, you agree to be contacted at the details provided. Replace with your own privacy policy and terms. </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="h-5 w-5 text-amber-600" />
              <span className="font-semibold">[business name]</span>
            </div>
            <p className="text-sm text-gray-600">Reliable building services for residential and commercial clients. Tailor this template to match your brand and offerings.</p>
          </div>
          <div>
            <p className="font-semibold mb-3">Quick Links</p>
            <div className="grid gap-2 text-sm">
              {navItems.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left text-gray-700 hover:text-gray-900">
                  {n.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold mb-3">Contact</p>
            <div className="grid gap-2 text-sm text-gray-700">
              <p>Phone: [contact info]</p>
              <p>Email: [contact info]</p>
              <p>Address: [address]</p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-gray-500">© {currentYear} [business name]. All rights reserved.</div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow transition-shadow">
      <div className="h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2 leading-relaxed">{desc}</p>
    </div>
  )
}

export default App
