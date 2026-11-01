import { useState, useEffect, useRef, ReactNode } from 'react'

// ─── Logo ─────────────────────────────────────────────────────────────────────

function LogoMark({ onDark = false, size = 42 }: { onDark?: boolean; size?: number }) {
  const gold = onDark ? '#c9a655' : '#b8893a'
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none" aria-hidden>
      <circle cx="26" cy="26" r="23.5" stroke={gold} strokeWidth="1.1" />
      <circle cx="26" cy="26" r="19" stroke={gold} strokeWidth="0.45" opacity="0.35" />
      <path
        d="M14.5 19 L19.5 33 L26 23 L32.5 33 L37.5 19"
        stroke={gold} strokeWidth="2.1" fill="none"
        strokeLinecap="square" strokeLinejoin="miter"
      />
      <line x1="21.5" y1="35.5" x2="30.5" y2="35.5" stroke={gold} strokeWidth="0.7" opacity="0.4" />
    </svg>
  )
}

function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-3 group" aria-label="WeFix Perfect home">
      <LogoMark onDark={onDark} size={38} />
      <div className="flex flex-col leading-none gap-0.5">
        <span
          className="text-[1.1rem] tracking-tight transition-opacity duration-300 group-hover:opacity-75"
          style={{
            fontFamily: "'DM Serif Display', serif",
            color: onDark ? '#f0ebe2' : '#1c1915',
          }}
        >
          WeFix Perfect
        </span>
        <span
          className="text-[0.58rem] font-semibold tracking-[0.22em] uppercase"
          style={{ color: '#b8893a' }}
        >
          Technical Services
        </span>
      </div>
    </a>
  )
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const SVC_ICONS: Record<string, ReactNode> = {
  tile: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><rect x="3" y="3" width="7.5" height="7.5" rx="0.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="0.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="0.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="0.5"/></svg>,
  floor: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M3 18h18M3 14h18"/><path d="M8 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/><path d="M3 18v2h18v-2"/></svg>,
  ceiling: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M2 4h20v3H2z"/><path d="M6 7v3M12 7v3M18 7v3"/><rect x="4" y="10" width="16" height="10" rx="0.5"/></svg>,
  ac: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><rect x="2" y="5" width="20" height="9" rx="2"/><path d="M6 14v4M12 14v4M18 14v4"/><path d="M6 9h.01M10 9h.01M14 9h4"/></svg>,
  electro: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>,
  electrical: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>,
  cleaning: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M3 21h18"/><path d="M8 21V7l4-4 4 4v14"/><path d="M10 21v-4h4v4"/></svg>,
  pipes: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M3 8h8M3 16h5"/><path d="M16 8h5M19 8v8"/><circle cx="11" cy="8" r="2"/><circle cx="8" cy="16" r="2"/><path d="M10 16h9"/></svg>,
  plumbing: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M4 12h8M4 6v12"/><rect x="12" y="9" width="8" height="6" rx="1"/><path d="M16 9V6a2 2 0 0 0-2-2H6"/></svg>,
  glass: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><rect x="2" y="3" width="20" height="18" rx="1"/><path d="M2 9h20M8 3v18"/><path d="M14 12h4M14 15h4"/></svg>,
  painting: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M3 5h12v6H3zM15 8h3a2 2 0 0 1 2 2v2"/><path d="M10 11v3h4v7h-4v-7"/></svg>,
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: 'painting',
    title: 'Painting & Wall Finishing',
    desc: 'Refined interior and exterior painting, surface preparation, and decorative finishes.',
    img: '/services/painting-1.jpeg',
  },
  {
    icon: 'tile',
    title: 'Floor & Wall Tiling',
    desc: 'Ceramic, porcelain, marble, and natural stone tile installation for any space.',
    img: '/services/tiling.jpeg',
  },
  {
    icon: 'floor',
    title: 'Carpentry & Wood Flooring',
    desc: 'Hardwood, engineered wood, and laminate flooring with expert precision carpentry.',
    img: '/services/Carpentry.jpg',
  },
  {
    icon: 'ceiling',
    title: 'False Ceiling & Partitions',
    desc: 'Gypsum and PVC false ceiling systems, lightweight partitions for flexible layouts.',
    img: '/services/ceiling-2.jpeg',
  },
  {
    icon: 'ac',
    title: 'AC & Ventilation Systems',
    desc: 'Air-conditioning installation, ventilation, and air filtration — supply to maintenance.',
    img: '/services/AC-Ventilation.jpeg',
  },
  {
    icon: 'electro',
    title: 'Electromechanical Works',
    desc: 'Equipment installation, commissioning, and scheduled preventive maintenance.',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=420&fit=crop&auto=format',
  },
  {
    icon: 'electrical',
    title: 'Electrical Fittings & Fixtures',
    desc: 'Repair and maintenance of fittings, fixtures, switchgear, and wiring throughout.',
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=420&fit=crop&auto=format',
  },
  {
    icon: 'cleaning',
    title: 'Building Cleaning Services',
    desc: 'Professional deep cleaning — residential, commercial, move-in, and post-construction.',
    img: '/services/Building-Cleaning.jpeg',
  },
  {
    icon: 'pipes',
    title: 'Sanitary & Pipe Repairing',
    desc: 'Leak detection, pipeline repair, and full drainage and water supply maintenance.',
    img: '/services/Sanitary-Pipe.jpg',
  },
  {
    icon: 'plumbing',
    title: 'Plumbing & Sanitary Installation',
    desc: 'Full plumbing systems, sanitary ware, bathroom fittings, and water networks.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=420&fit=crop&auto=format',
  },
  {
    icon: 'glass',
    title: 'Glass Plate Installation',
    desc: 'Frameless glass partitions, shower enclosures, facades, and decorative panels.',
    img: '/services/Glass-Plate.jpg',
  },
]

const SERVICE_DETAILS: Record<string, string[]> = {
  'Painting & Wall Finishing': ['Interior and exterior painting', 'Surface preparation and crack repair', 'Feature walls and decorative finishes', 'Clean protection and final touch-ups'],
  'Floor & Wall Tiling': ['Ceramic, porcelain, marble, and stone', 'Bathroom, kitchen, balcony, and commercial tiling', 'Grout renewal and tile repair', 'Levelled installation with precise alignment'],
  'Carpentry & Wood Flooring': ['Custom carpentry and fitted joinery', 'Laminate and engineered wood flooring', 'Skirting, doors, and trim', 'Repairs, refinishing, and adjustments'],
  'False Ceiling & Partitions': ['Gypsum and PVC ceiling systems', 'Access panels and lighting cut-outs', 'Decorative bulkheads and coves', 'Lightweight room partitions'],
  'AC & Ventilation Systems': ['AC installation and replacement', 'Duct and ventilation support', 'Fault diagnosis and repair', 'Preventive servicing and filter care'],
  'Electromechanical Works': ['Equipment installation and commissioning', 'Mechanical and electrical coordination', 'Troubleshooting and component replacement', 'Planned preventive maintenance'],
  'Electrical Fittings & Fixtures': ['Lighting, sockets, and switches', 'Wiring repairs and fault tracing', 'Fixture installation and replacement', 'Safe testing before handover'],
  'Building Cleaning Services': ['Residential and commercial deep cleaning', 'Move-in and move-out cleaning', 'Post-construction cleaning', 'Detail-focused scheduled maintenance'],
  'Sanitary & Pipe Repairing': ['Leak detection and targeted repair', 'Drainage and water-line maintenance', 'Pipe and fitting replacement', 'Pressure and flow troubleshooting'],
  'Plumbing & Sanitary Installation': ['Bathroom and kitchen plumbing', 'Sanitary ware and mixer installation', 'Water supply and drainage networks', 'Testing, sealing, and commissioning'],
  'Glass Plate Installation': ['Frameless glass partitions', 'Shower enclosures and mirrors', 'Decorative and facade panels', 'Accurate fitting and silicone finishing'],
}

const HERO_SLIDES = [
  { img: '/services/painting-2.jpeg', label: 'Painting & finishing' },
  { img: '/services/ceiling-1.jpeg', label: 'Ceilings & partitions' },
  { img: '/services/tiling.jpeg', label: 'Tiling & flooring' },
  { img: '/services/team-front.jpeg', label: 'One skilled team' },
  { img: '/services/team-back.jpeg', label: 'Ready across Dubai' },
]

const WHY_US = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Skilled Professionals',
    desc: 'Each service is handled by trained specialists — the right expert for every trade.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
    title: 'End-to-End Delivery',
    desc: 'We manage every phase from consultation to handover — no subcontracting, no surprises.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    title: 'Dubai Expertise',
    desc: 'Deep knowledge of Dubai\'s building codes and the exacting standards UAE properties demand.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><polyline points="20 6 9 17 4 12"/></svg>,
    title: 'Quality Guaranteed',
    desc: 'Every project uses premium materials finished to a standard we proudly put our name on.',
  },
]
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Al+Mankhool+Dubai+UAE'
const GMAIL_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=info@wefixperfect.com'
const NAV_LINKS = [
  { label: 'Home',     href: '#home'     },
  { label: 'Services', href: '#services' },
  { label: 'Why Us',   href: '#why-us'   },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
]

const FAQS = [
  {
    question: 'What services do you provide?',
    answer: 'We provide painting, tiling, carpentry and flooring, false ceilings, AC and ventilation, electrical, electromechanical, cleaning, plumbing, pipe repair, and glass installation.',
  },
  {
    question: 'Do you handle both homes and businesses?',
    answer: 'Yes. Our team supports apartments, villas, offices, retail spaces, and other commercial properties across Dubai.',
  },
  {
    question: 'Can I request multiple services together?',
    answer: 'Yes. We can coordinate multiple trades under one project plan, helping you avoid managing several separate service providers.',
  },
  {
    question: 'How can I request a quotation?',
    answer: 'Use the Request a Free Quote form in the Contact section. Select the service you need and share a short description of your project.',
  },
  {
    question: 'Do you offer maintenance support?',
    answer: 'Yes. We handle one-time repairs as well as planned preventive maintenance for residential and commercial properties.',
  },
]

// ─── Reveal wrapper ───────────────────────────────────────────────────────────

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } },
      { threshold: 0.07 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`section-enter${vis ? ' visible' : ''} ${className}`}
      style={{ transitionDelay: vis ? `${delay}ms` : '0ms' }}>
      {children}
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 60)
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0)
    }
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.getElementById(l.href.slice(1)))
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) }),
      { rootMargin: '-38% 0px -57% 0px' }
    )
    sections.forEach(s => s && obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <nav className={`professional-header fixed top-0 left-0 right-0 z-50 ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="top-service-bar">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="top-service-message"><span className="top-service-pulse" /> Hello, welcome to WE FIX PERFECT TECHNICAL SERVICES</span>
          <div className="top-contact-links">
            <a href={GMAIL_URL} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 4h16v16H4z"/><path d="m4 6 8 7 8-7"/></svg>
              <span>info@wefixperfect.com</span>
            </a>
            <span className="top-service-divider" />
            <a href="tel:+971555334802">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.8 19.8 0 0 1-3.06-8.53A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.12.94.36 1.88.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l.91-.91a2 2 0 0 1 2.11-.45c.93.34 1.87.58 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+971 55 533 4802</span>
            </a>
            <span className="top-service-divider" />
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="top-location">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
  Al Mankhool, Dubai
</a>
          </div>
        </div>
      </div>

      <div className="header-nav-wrap">
        <div className="header-nav-shell max-w-7xl mx-auto">
          <Logo onDark />
          <div className="hidden md:flex items-center gap-5">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className={`nav-link text-sm font-medium ${active === l.href ? 'active' : ''}`}>
                {l.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="hidden md:inline-flex nav-project-button">
            <span>Get a Quote</span><span aria-hidden>↗</span>
          </a>

          <button className="md:hidden! header-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                  : i === 1 ? 'scaleX(0)'
                  : 'rotate(-45deg) translate(4px, -4px)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      <div
        className="header-mobile-drawer md:hidden"
        style={{
          maxHeight: menuOpen ? '360px' : '0',
        }}
      >
        <div className="px-8 pt-5 pb-8 flex flex-col gap-5">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href}
              className="text-base text-stone-600 hover:text-stone-900 transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >{l.label}</a>
          ))}
          <a href="#contact"
            className="mt-2 btn-gold rounded px-6 py-3 text-sm text-center"
            onClick={() => setMenuOpen(false)}
          >
            <span className="btn-gold-inner">Get a Quote</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setSlide(current => (current + 1) % HERO_SLIDES.length), 4500)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero-bright relative min-h-screen flex items-center overflow-hidden">
      {HERO_SLIDES.map((item, index) => (
        <div
          key={item.img}
          className={`hero-slide absolute inset-0 bg-stone-900 ${slide === index ? 'is-active' : ''}`}
          style={{ backgroundImage: `url(${item.img})` }}
        />
      ))}
      <div className="hero-light-wash absolute inset-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-24">
        <div className="hero-copy max-w-2xl">
          <div className="animate-fade-up delay-100 inline-flex items-center gap-3 mb-6 hero-kicker">
            <span className="w-8 h-px bg-amber-500" />
            <span>Dubai technical services</span>
          </div>

          <h1 className="font-display animate-fade-up delay-200 leading-[1.04] mb-6">
            Better spaces.<br />
            <em className="not-italic">Finished perfectly.</em>
          </h1>

          <p className="animate-fade-up delay-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-light">
            Reliable maintenance, installation, and finishing for homes and businesses across Dubai—handled by one skilled team.
          </p>

          <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="btn-gold px-8 py-3.5 rounded-full font-semibold text-sm">
              <span className="btn-gold-inner">Start a Project</span>
            </a>
            <a href="#services" className="btn-outline-dark px-8 py-3.5 rounded-full font-semibold text-sm">
              <span className="btn-outline-dark-inner">View Our Services</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute z-20 bottom-10 right-6 md:right-10 hidden sm:flex items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.22em] text-white/60">{HERO_SLIDES[slide].label}</span>
        <div className="flex gap-2">
          {HERO_SLIDES.map((item, index) => (
            <button
              key={item.img}
              type="button"
              aria-label={`Show ${item.label}`}
              onClick={() => setSlide(index)}
              className={`slide-dot ${slide === index ? 'is-active' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
    </section>
  )
}

// ─── Stats bar ────────────────────────────────────────────────────────────────

function StatsBar() {
  const stats = [
    { v: '10+',   l: 'Expert Services' },
    { v: '100%',  l: 'Certified Team' },
    { v: 'Dubai', l: 'Homes & Businesses' },
    { v: '24 / 7', l: 'Available' },
  ]
  return (
    <Reveal>
      <div style={{ background: '#ffffff', borderBottom: '1px solid rgba(36,39,43,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="stat-item text-center">
                <div className="gold-text font-display text-3xl md:text-4xl mb-1"
                  style={{ fontFamily: "'DM Serif Display', serif" }}>{s.v}</div>
                <div className="text-xs uppercase tracking-widest font-medium text-stone-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────

function Services() {
  const [detail, setDetail] = useState<number | null>(null)

  useEffect(() => {
    if (detail === null) return
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setDetail(null)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', close)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', close)
    }
  }, [detail])

  return (
    <section id="services" className="service-cards-section py-28 px-6">
      <div className="service-cards-glow" />
      <div className="max-w-7xl mx-auto relative">
        <Reveal className="service-cards-heading">
          <div>
            <p className="section-kicker"><span /> Complete property care</p>
            <h2 className="font-display">Professional services.<br /><em>Perfectly delivered.</em></h2>
          </div>
          <div className="service-cards-heading-copy">
            <p>Explore our complete range of residential and commercial technical services across Dubai.</p>
            <a href="#contact">Request a custom service <span aria-hidden>↗</span></a>
          </div>
        </Reveal>

        <div className="service-cards-grid">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 80}>
              <article className="service-pro-card">
                <div className="service-pro-image">
                  <img src={service.img} alt={service.title} loading="lazy" />
                  <span className="service-pro-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="service-pro-view">View service <span aria-hidden>↗</span></span>
                </div>
                <div className="service-pro-content">
                  <div className="service-pro-icon">{SVC_ICONS[service.icon]}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <ul>
                    {SERVICE_DETAILS[service.title].slice(0, 2).map(item => <li key={item}>{item}</li>)}
                  </ul>
                  <button type="button" onClick={() => setDetail(index)}>
                    Explore details <span aria-hidden>→</span>
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {detail !== null && (
        <div className="service-modal-backdrop" role="presentation" onMouseDown={() => setDetail(null)}>
          <div className="service-modal" role="dialog" aria-modal="true" aria-labelledby="service-modal-title" onMouseDown={event => event.stopPropagation()}>
            <button type="button" className="service-modal-close" onClick={() => setDetail(null)} aria-label="Close service details">×</button>
            <div className="service-modal-photo">
              <img src={SERVICES[detail].img} alt={SERVICES[detail].title} />
            </div>
            <div className="service-modal-copy">
              <div className="service-feature-icon">{SVC_ICONS[SERVICES[detail].icon]}</div>
              <p className="text-xs tracking-[0.25em] uppercase font-semibold gold-label">Service details</p>
              <h3 id="service-modal-title" className="font-display text-4xl">{SERVICES[detail].title}</h3>
              <p className="text-stone-500 font-light leading-relaxed">{SERVICES[detail].desc}</p>
              <ul className="service-detail-list">
                {SERVICE_DETAILS[SERVICES[detail].title].map(item => <li key={item}><span>✓</span>{item}</li>)}
              </ul>
              <a href="#contact" className="btn-gold text-center px-7 py-3.5 rounded" onClick={() => setDetail(null)}>
                <span className="btn-gold-inner">Request a quote</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

// ─── Why Us ───────────────────────────────────────────────────────────────────

function WhyUs() {
  return (
    <section id="why-us" className="py-28 px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-20">
          <p className="text-xs tracking-[0.28em] uppercase font-semibold mb-5" style={{ color: '#c9a655' }}>
            Why Choose Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight" style={{ fontFamily: "'DM Serif Display', serif", color: '#24272b' }}>
            Built on Craft &amp;<br />Commitment
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_US.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div
                className="card-lift rounded-xl p-7 h-full flex flex-col gap-5 border"
                style={{
                  background: '#f7f8f6',
                  borderColor: 'rgba(36,39,43,0.08)',
                }}
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: '#fff0c7', color: '#d89200' }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2" style={{ color: '#24272b' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed font-light" style={{ color: '#6f7479' }}>{item.desc}</p>
                </div>
                <div className="mt-auto h-px w-8 rounded-full" style={{ background: '#c9a655', opacity: 0.35 }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-28 px-6 overflow-hidden" style={{ background: '#f6f7f5' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <Reveal>
            <div className="about-visual relative">
              <div className="rounded-2xl overflow-hidden aspect-4/3 bg-stone-300">
                <img
                  src="/services/team-front.jpeg"
                  alt="We Fix Perfect technical services team"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.92) saturate(0.85)' }}
                />
              </div>
              {/* Decorative offset border */}
              <div className="absolute -bottom-5 -left-5 w-full h-full rounded-2xl pointer-events-none"
                style={{ border: '1px solid rgba(184,137,58,0.25)', zIndex: -1 }} />
            </div>
          </Reveal>

          {/* Text */}
          <Reveal>
            <p className="text-xs tracking-[0.28em] uppercase font-semibold mb-5" style={{ color: '#b8893a' }}>About Us</p>
            <h2 className="font-display text-4xl md:text-[3rem] mb-8 leading-tight"
              style={{ fontFamily: "'DM Serif Display', serif", color: '#1c1915' }}>
              We Fix Perfect<br />Technical Services
            </h2>
            <p className="leading-relaxed mb-5 text-[1.05rem] font-light" style={{ color: '#3a3228' }}>
              We are a Dubai-based technical services company offering professional maintenance, installation, and repair services for residential and commercial properties across the emirate.
            </p>
            <p className="leading-relaxed mb-5 font-light" style={{ color: '#6b5f54' }}>
              With a complete suite of services — from painting, tiling, and carpentry to air-conditioning systems, electromechanical works, plumbing, electrical, and building cleaning — we are a single point of contact for every technical requirement your property demands.
            </p>
            <p className="leading-relaxed font-light" style={{ color: '#6b5f54' }}>
              Our team brings hands-on expertise and close attention to detail to every project, whether it's a single-room renovation or a full commercial fit-out. We take pride in work that lasts — finished on time, to the standard Dubai expects.
            </p>

            <div className="mt-10 pt-8 border-t" style={{ borderColor: 'rgba(28,25,21,0.1)' }}>
              <a href="#contact" className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded font-semibold text-sm">
                <span className="btn-gold-inner">Work With Us</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const sub = encodeURIComponent(`Enquiry — ${form.service || 'General'}`)
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`)
    window.open(`${GMAIL_URL}&su=${sub}&body=${body}`, '_blank', 'noopener,noreferrer')
  }

  const fieldBase = {
    background: '#ffffff',
    border: '1px solid rgba(28,25,21,0.6)',
    color: '#1c1915',
    borderRadius: '8px',
    padding: '14px 16px',
    fontSize: '14px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.25s ease',
    fontFamily: "'Outfit', sans-serif",
  }

  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = '#c9a655')
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = 'rgba(28,25,21,0.6)')

  return (
    <section id="contact" className="py-28 px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-20">
          <p className="text-xs tracking-[0.28em] uppercase font-semibold mb-5" style={{ color: '#b8893a' }}>Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", color: '#1c1915' }}>
            Request a Free Quote
          </h2>
          <p className="text-stone-500 max-w-md mx-auto font-light">
            Tell us about your project and we'll respond promptly.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form onSubmit={submit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-stone-700 mb-2.5 font-semibold">Name</label>
                  <input type="text" required value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name" style={fieldBase} onFocus={focus} onBlur={blur} />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-stone-700 mb-2.5 font-semibold">Phone</label>
                  <input type="tel" required value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="+971 XX XXX XXXX" style={fieldBase} onFocus={focus} onBlur={blur} />
                </div>
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-stone-700 mb-2.5 font-semibold">Service</label>
                <select value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                  style={{ ...fieldBase, appearance: 'none', cursor: 'pointer' }}
                  onFocus={focus} onBlur={blur}>
                  <option value="">Select a service…</option>
                  {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-stone-700 mb-2.5 font-semibold">Message</label>
                <textarea required rows={5} value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your project…"
                  style={{ ...fieldBase, resize: 'none' }}
                  onFocus={focus} onBlur={blur} />
              </div>
              <button type="submit" className="btn-gold w-full py-4 rounded font-semibold text-base">
                <span className="btn-gold-inner">{sent ? 'Email client opened ✓' : 'Send Enquiry'}</span>
              </button>
            </form>
          </Reveal>

          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-4 h-full">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.47 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                  label: 'Mobile',
                  value: '+971 55 533 4802',
                  href: 'tel:+971555334802',
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                  label: 'Email',
                  value: 'info@wefixperfect.com',
                  href: GMAIL_URL,
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                  label: 'Location',
                  value: 'Al Mankhool, Dubai, UAE',
                  href: MAPS_URL,
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl border bg-white flex gap-4 items-start"
                  style={{ borderColor: 'rgba(28,25,21,0.08)', boxShadow: '0 2px 12px rgba(28,25,21,0.04)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: '#f3ede0', color: '#b8893a' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">{item.label}</div>
                    {item.href
                      ? <a href={item.href}
     target={item.href.startsWith('http') ? '_blank' : undefined}
     rel="noopener noreferrer"
     className="text-stone-800 font-medium hover:text-amber-700 transition-colors text-sm">{item.value}</a>
                      : <p className="text-stone-800 text-sm font-light">{item.value}</p>}
                  </div>
                </div>
              ))}

              <div className="p-6 rounded-xl border"
                style={{ background: '#1c1915', borderColor: 'rgba(201,166,85,0.2)' }}>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(200,190,175,0.5)' }}>Office Hours</p>
                <p className="font-medium mb-0.5" style={{ color: '#f0ebe2' }}>Saturday – Thursday</p>
                <p className="font-display text-2xl gold-text" style={{ fontFamily: "'DM Serif Display', serif" }}>8 AM — 8 PM</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="site-footer px-6 pt-16 pb-8">
      <div className="footer-glow" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="footer-brand">
            <Logo onDark />
            <p className="mt-5 text-sm leading-relaxed font-light max-w-xs">
              Dubai's trusted partner for technical, maintenance, and installation services across residential and commercial properties.
            </p>
          </div>

          <div className="footer-column">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-5">Services</h4>
            <ul className="space-y-2.5 footer-links">
              {SERVICES.slice(0, 6).map(s => (
                <li key={s.title}>
                  <a href="#services" className="text-sm font-light"><span aria-hidden>→</span>{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-2.5 footer-links">
              {NAV_LINKS.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm font-light"><span aria-hidden>→</span>{l.label}</a>
                </li>
              ))}
              <li className="pt-1">
                <a href="#contact" className="footer-quote text-sm font-medium">
                  Get a Quote <span aria-hidden>↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span>© 2026 WE FIX PERFECT TECHNICAL SERVICES L.L.C</span>
          <span>Al Mankhool, Dubai, UAE</span>
        </div>
      </div>
    </footer>
  )
}

function ChatBot() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className={`chatbot ${open ? 'is-open' : ''}`}>
      {open && (
        <div className="chatbot-panel" role="dialog" aria-label="Frequently asked questions">
          <div className="chatbot-header">
            <div className="chatbot-avatar"><LogoMark size={30} /></div>
            <div><strong>WeFix Assistant</strong><span><i /> Ready to help</span></div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </div>
          <div className="chatbot-body">
            <div className="chatbot-message">Hello. Choose a question below and I’ll help you find the answer.</div>
            {selected !== null && (
              <>
                <div className="chatbot-question">{FAQS[selected].question}</div>
                <div className="chatbot-message chatbot-answer">{FAQS[selected].answer}</div>
              </>
            )}
            <div className="chatbot-faqs">
              <span>Frequently asked</span>
              {FAQS.map((faq, index) => (
                <button key={faq.question} type="button" onClick={() => setSelected(index)} className={selected === index ? 'is-active' : ''}>
                  {faq.question}<span aria-hidden>→</span>
                </button>
              ))}
            </div>
          </div>
          <a href="#contact" className="chatbot-contact" onClick={() => setOpen(false)}>Still need help? Contact our team <span aria-hidden>↗</span></a>
        </div>
      )}
      <button type="button" className="chatbot-toggle" onClick={() => setOpen(value => !value)} aria-label={open ? 'Close help' : 'Open help'}>
        {open ? <span className="chatbot-close-icon">×</span> : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
            <path d="M21 11.5a8 8 0 0 1-8.5 8A9.5 9.5 0 0 1 8 18.4L3 20l1.6-4A8 8 0 1 1 21 11.5z"/>
            <path d="M8 10h8M8 14h5"/>
          </svg>
        )}
        {!open && <span className="chatbot-badge">FAQ</span>}
      </button>
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <WhyUs />
      <About />
      <Contact />
      <Footer />
      <ChatBot />
    </>
  )
}
