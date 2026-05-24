import Image from 'next/image'

const ACCENT = '#FF5C35'
const DARK = '#1a1a1a'
const MUTED = '#555'
const LIGHT = '#888'
const BORDER = '#e8e8e8'

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span style={{ color: ACCENT, fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
        {children}
      </span>
      <div style={{ flex: 1, height: 1, background: ACCENT, opacity: 0.25 }} />
    </div>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: '0.6rem', fontWeight: 600, padding: '1px 7px', borderRadius: 99, border: `1px solid ${ACCENT}`, color: ACCENT, whiteSpace: 'nowrap' }}>
      {children}
    </span>
  )
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ marginBottom: 2, fontSize: '0.73rem', color: MUTED, lineHeight: 1.55 }}>
      {children}
    </li>
  )
}

interface JobProps {
  company: string
  location?: string
  role: string
  period: string
  bullets?: string[]
  tags?: string[]
  compact?: boolean
}

function Job({ company, location, role, period, bullets, tags, compact }: JobProps) {
  return (
    <div style={{ marginBottom: compact ? 8 : 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 700, fontSize: '0.82rem', color: DARK }}>{company}</span>
          {location && <span style={{ fontSize: '0.7rem', color: LIGHT }}>{location}</span>}
        </div>
        <span style={{ fontSize: '0.68rem', color: LIGHT, whiteSpace: 'nowrap', marginLeft: 8 }}>{period}</span>
      </div>
      <p style={{ margin: '0 0 4px', fontSize: '0.72rem', fontWeight: 600, color: ACCENT }}>{role}</p>
      {bullets && bullets.length > 0 && (
        <ul style={{ margin: '0 0 5px 12px', padding: 0 }}>
          {bullets.map((b, i) => <Bullet key={i}>{b}</Bullet>)}
        </ul>
      )}
      {tags && tags.length > 0 && (
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
          {tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>
      )}
    </div>
  )
}

// ── Content ────────────────────────────────────────────────────────────────

const content = {
  es: {
    title: 'Desarrollador Web & Móvil · Diseñador UX/UI & Gráfico',
    sections: {
      profile: 'Perfil profesional',
      experience: 'Experiencia laboral',
      education: 'Educación',
      projects: 'Proyectos propios — Ab-Lab',
      skills: 'Habilidades técnicas',
      languages: 'Idiomas',
      transport: 'Transporte',
    },
    profile: 'Desarrollador Web y Móvil con más de una década de experiencia combinando desarrollo, diseño UX/UI y marketing digital. Formación oficial reglada en Diseño Gráfico, Desarrollo de Aplicaciones Web (DAW) y Desarrollo de Aplicaciones Multiplataforma (DAM). Actualmente construyendo y publicando apps propias en App Store y Google Play con Flutter, Kotlin y React Native, además de ejercer el desarrollo web con PHP, JavaScript y Next.js en entorno profesional. Capaz de liderar un producto digital de extremo a extremo.',
    jobs: [
      {
        company: 'Dropson', location: 'Santa Pola',
        role: 'Desarrollo Web · Diseño UX/UI & Gráfico · Marketing',
        period: 'Sep 2024 — Actualidad',
        bullets: [
          'Desarrollo y mantenimiento de sitios web corporativos con PHP, MySQL y JavaScript.',
          'Liderando iniciativas de diseño UX/UI centradas en experiencias digitales orientadas al usuario.',
          'Optimización SEO técnico con fuerte enfoque en usabilidad y conversión.',
          'Planificación y ejecución de estrategias de marketing digital para impulsar la visibilidad de marca.',
          'Creación de recursos visuales para web y campañas, alineados con las guías de marca.',
        ],
        tags: ['PHP', 'MySQL', 'JavaScript', 'SEO', 'UX/UI', 'Figma'],
      },
      {
        company: 'ClickNoise', location: 'Torrevieja',
        role: 'Desarrollo Web · Diseño Gráfico & Web · Marketing',
        period: 'Ene 2023 — Sep 2024',
        bullets: [
          'Diseño y desarrollo de sitios web con optimización SEO técnico y enfoque en usabilidad y conversión.',
          'Creación y mantenimiento de identidades de marca, incluyendo logotipos y manuales de identidad corporativa.',
          'Gestión y optimización de campañas de marketing digital en Google Ads y Meta.',
          'Colaboración directa con clientes para traducir necesidades de negocio en soluciones visuales y digitales.',
        ],
        tags: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'Google Ads', 'Meta Ads'],
      },
      {
        company: 'Trabajador Autónomo', location: 'Remoto',
        role: 'Desarrollo Web · Diseño UX/UI & Gráfico · Marketing',
        period: 'Ago 2020 — Ene 2023',
        bullets: [
          'Desarrollo de sitios web con HTML, CSS y JavaScript; diseño responsive y maquetaciones limpias.',
          'Diseño UX/UI e investigación UX para mejorar la usabilidad y la experiencia de usuario.',
          'Planificación y gestión de campañas en Google Ads, Meta Ads y estrategias para marketplaces (Amazon).',
          'Edición fotográfica y de vídeo, motion graphics y creación de infografías.',
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'UX Research', 'Google Ads', 'Meta Ads'],
      },
      { company: 'NOBI Ltd', location: 'Londres — Remoto', role: 'Diseño Gráfico · Diseño Web · Marketing', period: 'Oct 2019 — Ago 2020', compact: true },
      { company: 'ASOS.com', location: 'Watford', role: 'Marketing', period: 'May 2016 — Sep 2019', compact: true },
      { company: 'WWBB London', location: 'Londres', role: 'Diseño Gráfico · Marketing', period: 'May 2015 — May 2016', compact: true },
      { company: 'Sasaki International Ltd', location: 'Milton Keynes', role: 'Diseño Gráfico · Marketing', period: 'Sep 2013 — May 2015', compact: true },
    ],
    education: [
      { title: 'Des. de Aplicaciones Multiplataforma', sub: 'Ciclo Formativo Superior · DAM' },
      { title: 'Desarrollo de Aplicaciones Web', sub: 'Ciclo Formativo Superior · DAW' },
      { title: 'Diseño Gráfico', sub: 'Grado' },
    ],
    projects: [
      { name: 'Licencia de Armas', tags: ['React Native', 'iOS', 'Android'], desc: 'App de preparación para el examen oficial de licencia de armas en España. Publicada en App Store y Google Play con versiones Premium y Freemium.' },
      { name: 'Contabilidad Doméstica', tags: ['Flutter', 'iOS', 'Android', 'Firebase'], desc: 'Gestión de finanzas personales y familiares. Presupuestos, gráficas, botiquín digital y sincronización cloud opcional. Disponible en Google Play.' },
      { name: 'Examen Test PNB', tags: ['Flutter', 'iOS', 'Android'], desc: 'App para el examen del Patrón de Navegación Básica en España. +400 preguntas oficiales, flashcards interactivas y simulacros de examen real.' },
      { name: 'MiDosis', tags: ['Kotlin', 'Android', 'Firebase'], desc: 'Gestión de medicación familiar con recordatorios inteligentes y perfiles independientes para personas y mascotas. Disponible en Google Play.' },
    ],
    skills: [
      { label: 'Frontend & Web', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'PHP', 'WordPress'] },
      { label: 'Móvil', items: ['Flutter', 'Dart', 'Kotlin', 'Android SDK', 'React Native'] },
      { label: 'Backend & Cloud', items: ['Node.js', 'Express', 'Laravel', 'Firebase', 'MySQL', 'Docker'] },
      { label: 'Diseño & UX', items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Blender'] },
    ],
    languages: [
      { lang: 'Español', level: 'Nativo (C2)' },
      { lang: 'Inglés', level: 'Nativo / Competencia profesional completa (C1)' },
      { lang: 'Italiano', level: 'Avanzado (B2)' },
      { lang: 'Valenciano / Catalán', level: 'Básico (B1)' },
    ],
    transport: { title: 'Permiso de conducir', sub: 'Tipo B · Vehículo propio' },
  },
  en: {
    title: 'Web & Mobile Developer · UX/UI & Graphic Designer',
    sections: {
      profile: 'Professional profile',
      experience: 'Work experience',
      education: 'Education',
      projects: 'Personal projects — Ab-Lab',
      skills: 'Technical skills',
      languages: 'Languages',
      transport: 'Transport',
    },
    profile: 'Web and Mobile Developer with over a decade of experience combining development, UX/UI design and digital marketing. Official qualifications in Graphic Design, Web Application Development (DAW) and Multiplatform Application Development (DAM). Currently building and publishing own apps on the App Store and Google Play using Flutter, Kotlin and React Native, while also working professionally in web development with PHP, JavaScript and Next.js. Able to lead a digital product end-to-end.',
    jobs: [
      {
        company: 'Dropson', location: 'Santa Pola, Spain',
        role: 'Web Development · UX/UI & Graphic Design · Marketing',
        period: 'Sep 2024 — Present',
        bullets: [
          'Developing and maintaining corporate websites with PHP, MySQL and JavaScript.',
          'Leading UX/UI design initiatives focused on user-centred digital experiences aligned with the brand.',
          'Technical SEO optimisation with a strong focus on usability and conversion.',
          'Planning and executing digital marketing strategies to drive product visibility and brand growth.',
          'Creating visual assets for web and marketing campaigns, aligned with brand guidelines.',
        ],
        tags: ['PHP', 'MySQL', 'JavaScript', 'SEO', 'UX/UI', 'Figma'],
      },
      {
        company: 'ClickNoise', location: 'Torrevieja, Spain',
        role: 'Web Development · Graphic & Web Design · Marketing',
        period: 'Jan 2023 — Sep 2024',
        bullets: [
          'Designing and developing websites with technical SEO optimisation and a focus on usability and conversion.',
          'Creating and maintaining brand identities, including logos and corporate identity guidelines.',
          'Managing and optimising digital marketing campaigns on Google Ads and Meta.',
          'Working directly with clients to translate business needs into effective visual and digital solutions.',
        ],
        tags: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'Google Ads', 'Meta Ads'],
      },
      {
        company: 'Self-employed', location: 'Remote',
        role: 'Web Development · UX/UI & Graphic Design · Marketing',
        period: 'Aug 2020 — Jan 2023',
        bullets: [
          'Building websites with HTML, CSS and JavaScript; responsive design and clean layouts.',
          'UX/UI design and UX research to improve usability and user experience.',
          'Planning and managing campaigns on Google Ads, Meta Ads and marketplace strategies (Amazon).',
          'Photo and video editing, motion graphics and infographic creation.',
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'UX Research', 'Google Ads', 'Meta Ads'],
      },
      { company: 'NOBI Ltd', location: 'London — Remote', role: 'Graphic Design · Web Design · Marketing', period: 'Oct 2019 — Aug 2020', compact: true },
      { company: 'ASOS.com', location: 'Watford, UK', role: 'Marketing', period: 'May 2016 — Sep 2019', compact: true },
      { company: 'WWBB London', location: 'London, UK', role: 'Graphic Design · Marketing', period: 'May 2015 — May 2016', compact: true },
      { company: 'Sasaki International Ltd', location: 'Milton Keynes, UK', role: 'Graphic Design · Marketing', period: 'Sep 2013 — May 2015', compact: true },
    ],
    education: [
      { title: 'Multiplatform Application Development', sub: 'Higher Vocational Qualification · DAM' },
      { title: 'Web Application Development', sub: 'Higher Vocational Qualification · DAW' },
      { title: 'Graphic Design', sub: 'Degree' },
    ],
    projects: [
      { name: 'Licencia de Armas', tags: ['React Native', 'iOS', 'Android'], desc: 'Exam prep app for the official firearms licence in Spain. Published on the App Store and Google Play with Premium and Freemium versions.' },
      { name: 'Contabilidad Doméstica', tags: ['Flutter', 'iOS', 'Android', 'Firebase'], desc: 'Personal and household finance management. Budgets, charts, digital medicine cabinet and optional cloud sync. Available on Google Play.' },
      { name: 'Examen Test PNB', tags: ['Flutter', 'iOS', 'Android'], desc: 'App for the Patrón de Navegación Básica nautical licence exam in Spain. 400+ official questions, interactive flashcards and real exam simulators.' },
      { name: 'MiDosis', tags: ['Kotlin', 'Android', 'Firebase'], desc: 'Family medication management with smart reminders and independent profiles for people and pets. Available on Google Play.' },
    ],
    skills: [
      { label: 'Frontend & Web', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'PHP', 'WordPress'] },
      { label: 'Mobile', items: ['Flutter', 'Dart', 'Kotlin', 'Android SDK', 'React Native'] },
      { label: 'Backend & Cloud', items: ['Node.js', 'Express', 'Laravel', 'Firebase', 'MySQL', 'Docker'] },
      { label: 'Design & UX', items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Blender'] },
    ],
    languages: [
      { lang: 'Spanish', level: 'Native (C2)' },
      { lang: 'English', level: 'Native / Full professional proficiency (C1)' },
      { lang: 'Italian', level: 'Advanced (B2)' },
      { lang: 'Valencian / Catalan', level: 'Basic (B1)' },
    ],
    transport: { title: 'Driving licence', sub: 'Type B · Own vehicle' },
  },
}

// ── Component ──────────────────────────────────────────────────────────────

export default function ResumeDocument({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const c = lang === 'es' ? content.es : content.en

  return (
    <div style={{ background: 'white', color: DARK, fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', maxWidth: '210mm', margin: '0 auto' }}>

      {/* ── PAGE 1 ─────────────────────────────────────────────── */}
      <div style={{ padding: '44px 52px 36px', boxSizing: 'border-box', position: 'relative', pageBreakAfter: 'always', breakAfter: 'page' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: 5, height: '100%', background: ACCENT }} />

        {/* HEADER */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 22 }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, margin: 0, lineHeight: 1, letterSpacing: '-0.02em', color: DARK }}>
              Abraham Pérez
            </h1>
            <p style={{ margin: '5px 0 14px', fontSize: '0.92rem', fontWeight: 600, color: ACCENT }}>
              {c.title}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 18px', fontSize: '0.7rem', color: MUTED }}>
              <span>✉ ap94143@gmail.com</span>
              <span>📍 Alicante, España</span>
              <span>🌐 abrahamperez.net</span>
              <span>🔬 ab-lab.es</span>
              <span>🐙 github.com/abraham1515</span>
              <span>💼 linkedin/abraham-pérez-rodríguez</span>
            </div>
          </div>
          <div style={{ width: 90, height: 90, borderRadius: 14, overflow: 'hidden', flexShrink: 0, marginLeft: 24, border: `3px solid ${BORDER}` }}>
            <Image src="/assets/Projects/CV/me.jpeg" alt="Abraham Pérez" width={90} height={90} style={{ width: '100%', height: '100%', objectFit: 'cover' }} unoptimized />
          </div>
        </div>

        <div style={{ height: 1, background: BORDER, marginBottom: 20 }} />

        {/* PERFIL */}
        <div style={{ marginBottom: 20 }}>
          <SectionTitle>{c.sections.profile}</SectionTitle>
          <p style={{ fontSize: '0.78rem', lineHeight: 1.65, color: MUTED, margin: 0 }}>
            {c.profile}
          </p>
        </div>

        {/* EXPERIENCIA */}
        <div>
          <SectionTitle>{c.sections.experience}</SectionTitle>
          {c.jobs.map((job) => (
            <Job key={job.company + job.period} {...job} />
          ))}
        </div>
      </div>

      {/* ── PAGE 2 ─────────────────────────────────────────────── */}
      <div style={{ padding: '44px 52px 36px', boxSizing: 'border-box', position: 'relative', borderTop: `4px solid ${BORDER}`, pageBreakBefore: 'always', breakBefore: 'page' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: 5, height: '100%', background: ACCENT }} />

        {/* EDUCACIÓN */}
        <div style={{ marginBottom: 28 }}>
          <SectionTitle>{c.sections.education}</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
            {c.education.map(({ title, sub }) => (
              <div key={title} style={{ padding: '8px 12px', borderRadius: 8, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}` }}>
                <p style={{ margin: 0, fontWeight: 700, fontSize: '0.7rem', color: DARK, lineHeight: 1.3 }}>{title}</p>
                <p style={{ margin: '2px 0 0', fontSize: '0.62rem', color: LIGHT }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PROYECTOS */}
        <div style={{ marginBottom: 28 }}>
          <SectionTitle>{c.sections.projects}</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {c.projects.map(({ name, tags, desc }) => (
              <div key={name} style={{ padding: '12px 14px', borderRadius: 10, border: `1px solid ${BORDER}`, background: '#fafafa' }}>
                <p style={{ margin: '0 0 6px', fontWeight: 700, fontSize: '0.8rem', color: DARK }}>{name}</p>
                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 7 }}>
                  {tags.map(t => <Tag key={t}>{t}</Tag>)}
                </div>
                <p style={{ margin: 0, fontSize: '0.72rem', color: MUTED, lineHeight: 1.55 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* HABILIDADES */}
        <div style={{ marginBottom: 28 }}>
          <SectionTitle>{c.sections.skills}</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {c.skills.map(({ label, items }) => (
              <div key={label} style={{ padding: '10px 12px', borderRadius: 8, border: `1px solid ${BORDER}` }}>
                <p style={{ margin: '0 0 7px', fontWeight: 700, fontSize: '0.65rem', color: ACCENT, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</p>
                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                  {items.map(i => (
                    <span key={i} style={{ fontSize: '0.67rem', padding: '2px 7px', borderRadius: 99, background: '#f0f0f0', color: MUTED }}>{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IDIOMAS + TRANSPORTE */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'start' }}>
          <div>
            <SectionTitle>{c.sections.languages}</SectionTitle>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {c.languages.map(({ lang: l, level }) => (
                <div key={l} style={{ padding: '7px 12px', borderRadius: 8, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}` }}>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: '0.73rem', color: DARK }}>{l}</p>
                  <p style={{ margin: '2px 0 0', fontSize: '0.63rem', color: LIGHT }}>{level}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle>{c.sections.transport}</SectionTitle>
            <div style={{ padding: '7px 12px', borderRadius: 8, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}` }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: '0.73rem', color: DARK }}>{c.transport.title}</p>
              <p style={{ margin: '2px 0 0', fontSize: '0.63rem', color: LIGHT }}>{c.transport.sub}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
