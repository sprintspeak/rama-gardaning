'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('Thank you for your inquiry. We will contact you shortly.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#E6D5B8]">
      <header className="sticky top-0 z-50 bg-[#1B3022] shadow-lg">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-[#E6D5B8] text-2xl font-semibold tracking-wide">
            Rama Gardening
          </div>
          <div className="hidden md:flex gap-8">
            <a
              href="#services"
              className="text-[#E6D5B8] hover:text-white transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-[#E6D5B8] hover:text-white transition-colors duration-300"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-[#E6D5B8] hover:text-white transition-colors duration-300"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-[#E6D5B8] hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="bg-[#E6D5B8] text-[#1B3022] px-6 py-2 rounded hover:bg-white transition-colors duration-300 font-medium"
          >
            Get Quote
          </a>
        </nav>
      </header>

      <main>
        <section className="relative min-h-screen flex items-center justify-center text-[#E6D5B8]">
          <div className="absolute inset-0">
            <Image
              src="https://picsum.photos/1600/900?random=1"
              alt="Well maintained garden"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1B3022]/80 to-[#2d4a38]/80"></div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0U2RDVCOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Bespoke Landscape Architecture in London
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-[#E6D5B8]/90 max-w-3xl mx-auto leading-relaxed">
              Transforming outdoor spaces into timeless sanctuaries through
              expert craftsmanship and sustainable design excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-[#E6D5B8] text-[#1B3022] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </a>
              <a
                href="#services"
                className="border-2 border-[#E6D5B8] text-[#E6D5B8] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#E6D5B8] hover:text-[#1B3022] transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 px-6 bg-[#E6D5B8]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B3022] mb-4">
                Our Services
              </h2>
              <p className="text-xl text-[#1B3022]/80 max-w-2xl mx-auto">
                Comprehensive landscape solutions tailored to your vision and
                lifestyle
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg">
                <Image src="https://picsum.photos/800/600?random=2" alt="Formal garden design" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg">
                <Image src="https://picsum.photos/800/600?random=3" alt="Manicured hedges and lawn" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg">
                <Image src="https://picsum.photos/1600/900?random=1" alt="Garden in spring" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#1B3022] rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-[#E6D5B8]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1B3022] mb-4">
                  Garden Design
                </h3>
                <p className="text-[#1B3022]/80 leading-relaxed">
                  Bespoke garden designs that harmonize aesthetics with
                  functionality. From conceptual sketches to detailed plans, we
                  create outdoor spaces that reflect your personality and
                  enhance your lifestyle.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#1B3022] rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-[#E6D5B8]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1B3022] mb-4">
                  Landscape Architecture
                </h3>
                <p className="text-[#1B3022]/80 leading-relaxed">
                  Strategic landscape planning and architectural integration.
                  Our expert team crafts sustainable outdoor environments that
                  complement your property while respecting the natural
                  ecosystem.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#1B3022] rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-[#E6D5B8]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1B3022] mb-4">
                  Garden Maintenance
                </h3>
                <p className="text-[#1B3022]/80 leading-relaxed">
                  Premium ongoing care and seasonal maintenance programs. Keep
                  your garden flourishing year-round with our dedicated
                  horticultural experts who ensure every detail is perfected.
                </p>
              </div>
            </div>
          </div>
        
        </section>

        <section id="testimonials" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B3022] mb-4">
                What Clients Say
              </h2>
              <p className="text-xl text-[#1B3022]/80 max-w-2xl mx-auto">
                A few words from homeowners who wanted a garden that feels
                effortless to live with.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-[#1B3022]/10 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-5xl leading-none text-[#1B3022]/20 mb-4">“</div>
                <p className="text-[#1B3022]/80 text-lg leading-relaxed mb-6">
                  The team transformed a tired patch of grass into a clean, modern
                  space we actually use. Everything was tidy, on time, and exactly
                  as promised.
                </p>
                <div className="pt-6 border-t border-[#1B3022]/10">
                  <p className="font-semibold text-[#1B3022]">Sophie R.</p>
                  <p className="text-sm text-[#1B3022]/70">Hove • Full garden refresh</p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#1B3022]/10 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-5xl leading-none text-[#1B3022]/20 mb-4">“</div>
                <p className="text-[#1B3022]/80 text-lg leading-relaxed mb-6">
                  We wanted low-maintenance without it looking “plain”. The design
                  choices were spot on and the finish is premium. Neighbours keep
                  asking who did it.
                </p>
                <div className="pt-6 border-t border-[#1B3022]/10">
                  <p className="font-semibold text-[#1B3022]">James L.</p>
                  <p className="text-sm text-[#1B3022]/70">Brighton • Design + planting</p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#1B3022]/10 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-5xl leading-none text-[#1B3022]/20 mb-4">“</div>
                <p className="text-[#1B3022]/80 text-lg leading-relaxed mb-6">
                  Great communication and the maintenance plan is a game changer.
                  The garden stays sharp all year and we don’t have to think about it.
                </p>
                <div className="pt-6 border-t border-[#1B3022]/10">
                  <p className="font-semibold text-[#1B3022]">Amira K.</p>
                  <p className="text-sm text-[#1B3022]/70">Shoreham • Ongoing maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-24 px-6 bg-[#E6D5B8]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B3022] mb-4">
                FAQs
              </h2>
              <p className="text-xl text-[#1B3022]/80">
                Quick answers to the questions we get asked most.
              </p>
            </div>

            <div className="space-y-4">
              <details className="group rounded-2xl bg-white/80 border border-[#1B3022]/10 p-6 shadow-sm">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold text-[#1B3022]">
                    How quickly can you start?
                  </span>
                  <span className="text-[#1B3022]/70 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="mt-4 text-[#1B3022]/80 leading-relaxed">
                  For small jobs we can often start within 1–2 weeks. Larger design-and-build
                  projects usually book 3–6 weeks ahead depending on the season.
                </p>
              </details>

              <details className="group rounded-2xl bg-white/80 border border-[#1B3022]/10 p-6 shadow-sm">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold text-[#1B3022]">
                    Do you offer free quotes?
                  </span>
                  <span className="text-[#1B3022]/70 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="mt-4 text-[#1B3022]/80 leading-relaxed">
                  Yes — we’ll arrange a quick site visit (or video call) and send a clear quote
                  with scope, timelines, and options.
                </p>
              </details>

              <details className="group rounded-2xl bg-white/80 border border-[#1B3022]/10 p-6 shadow-sm">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold text-[#1B3022]">
                    Can you design for low maintenance?
                  </span>
                  <span className="text-[#1B3022]/70 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="mt-4 text-[#1B3022]/80 leading-relaxed">
                  Absolutely. We can recommend planting, borders, surfaces, and irrigation choices
                  that look great with minimal upkeep.
                </p>
              </details>

              <details className="group rounded-2xl bg-white/80 border border-[#1B3022]/10 p-6 shadow-sm">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold text-[#1B3022]">
                    What areas do you cover?
                  </span>
                  <span className="text-[#1B3022]/70 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="mt-4 text-[#1B3022]/80 leading-relaxed">
                  We cover Brighton &amp; Hove and nearby areas. If you’re just outside, message us —
                  we’re flexible for the right project.
                </p>
              </details>

              <details className="group rounded-2xl bg-white/80 border border-[#1B3022]/10 p-6 shadow-sm">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold text-[#1B3022]">
                    Are you insured?
                  </span>
                  <span className="text-[#1B3022]/70 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="mt-4 text-[#1B3022]/80 leading-relaxed">
                  Yes — we’re fully insured and always work with safety and tidy handovers in mind.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-24 px-6 bg-gradient-to-br from-[#1B3022] to-[#2d4a38]"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#E6D5B8] mb-4">
                Start Your Journey
              </h2>
              <p className="text-xl text-[#E6D5B8]/80">
                Let us bring your vision to life with our expert landscape
                services
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl p-8 md:p-12 shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#1B3022] font-semibold mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 border-2 border-[#1B3022]/20 rounded-lg focus:border-[#1B3022] focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#1B3022] font-semibold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 border-2 border-[#1B3022]/20 rounded-lg focus:border-[#1B3022] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-[#1B3022] font-semibold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border-2 border-[#1B3022]/20 rounded-lg focus:border-[#1B3022] focus:outline-none transition-colors"
                  placeholder="+44 20 XXXX XXXX"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-[#1B3022] font-semibold mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-[#1B3022]/20 rounded-lg focus:border-[#1B3022] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project vision..."
                />
              </div>
              {submitStatus && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                  {submitStatus}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1B3022] text-[#E6D5B8] py-4 rounded-lg text-lg font-semibold hover:bg-[#2d4a38] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Request Consultation'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#1B3022] text-[#E6D5B8] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Rama Gardening</h3>
              <p className="text-[#E6D5B8]/80">
                Bespoke landscape architecture creating timeless outdoor spaces
                across London.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-[#E6D5B8]/80 hover:text-[#E6D5B8] transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[#E6D5B8]/80 hover:text-[#E6D5B8] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-[#E6D5B8]/80 mb-2">London, United Kingdom</p>
              <p className="text-[#E6D5B8]/80 mb-2">+44 20 XXXX XXXX</p>
              <p className="text-[#E6D5B8]/80">info@ramagardening.co.uk</p>
            </div>
          </div>
          <div className="border-t border-[#E6D5B8]/20 pt-8 text-center text-[#E6D5B8]/60">
            <p>&copy; 2024 Rama Gardening. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
