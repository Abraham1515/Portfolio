export type ProjectCategory = 'development' | 'branding'

export interface AppDownloadLink {
  label: string
  url: string
  comingSoon?: boolean
}

export interface Project {
  id: string
  title: string
  description: string
  fullDescription?: string
  category: ProjectCategory
  image: string
  heroImage?: string
  logo?: string
  gallery?: string[]
  screenshots?: string[]
  hidden?: boolean
  imageScale?: number
  ghLink?: string
  privateGithub?: boolean
  demoLink?: string
  downloads?: AppDownloadLink[]
  tags?: string[]
  year?: number
  client?: string
}

export const projects: Project[] = [
  // ── Development ──────────────────────────────────────────────────────────────
  {
    id: 'licencia-premium',
    title: 'Licencia de Armas',
    description:
      'React Native app for firearms license exam prep. Available on Android and iOS (Premium) and Android Freemium.',
    category: 'development',
    image: '/assets/Projects/armas/appstore.png',
    heroImage: '/assets/Projects/armas/hero.webp',
    logo: '/assets/Projects/armas/appstore.png',
    gallery: [
      '/assets/Projects/armas/retrom.webp',
      '/assets/Projects/armas/deer.webp',
      '/assets/Projects/armas/contact.webp',
    ],
    screenshots: [
      '/assets/Projects/armas/app-main.webp',
      '/assets/Projects/armas/app-mini1.webp',
      '/assets/Projects/armas/app-mini2.webp',
      '/assets/Projects/armas/app-mini3.webp',
      '/assets/Projects/armas/app-mini4.webp',
    ],
    downloads: [
      {
        label: 'Android Premium',
        url: 'https://play.google.com/store/apps/details?id=com.abrahamperez.licencia.premium&hl=es_419',
      },
      {
        label: 'Android Freemium',
        url: 'https://play.google.com/store/apps/details?id=com.abrahamperez.practicateoricaarmas&hl=es_419',
      },
      {
        label: 'Apple Premium',
        url: 'https://apps.apple.com/us/app/test-licencia-de-armas-d-y-e/id6758245387',
      },
    ],
    ghLink: 'https://github.com/Abraham1515/Licencia-de-armas',
    demoLink: 'https://ab-lab.es/licencia-de-armas/',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    id: 'contabilidad-domestica',
    title: 'Contabilidad Doméstica',
    description:
      'Flutter app to manage personal and household finances — expenses, income, budgets and visual analytics. Free with ads, available on Android and coming soon to iOS.',
    category: 'development',
    image: '/assets/Projects/Cont/logo512.jpg',
    heroImage: '/assets/Projects/Cont/Gemini_Generated_Image_77pivo77pivo77pi.webp',
    logo: '/assets/Projects/Cont/logo512.jpg',
    gallery: [
      '/assets/Projects/Cont/hero.png',
    ],
    screenshots: [
      '/assets/Projects/Cont/WhatsApp Image 2026-04-25 at 07.44.15.jpeg',
      '/assets/Projects/Cont/WhatsApp Image 2026-04-25 at 07.44.15 (1).jpeg',
      '/assets/Projects/Cont/WhatsApp Image 2026-04-25 at 07.44.15 (2).jpeg',
      '/assets/Projects/Cont/WhatsApp Image 2026-04-25 at 07.44.15 (3).jpeg',
      '/assets/Projects/Cont/WhatsApp Image 2026-04-25 at 07.44.15 (4).jpeg',
      '/assets/Projects/Cont/WhatsApp Image 2026-04-25 at 07.44.15 (5).jpeg',
      '/assets/Projects/Cont/WhatsApp Image 2026-04-25 at 07.44.15 (6).jpeg',
      '/assets/Projects/Cont/WhatsApp Image 2026-04-25 at 07.44.16.jpeg',
      '/assets/Projects/Cont/WhatsApp Image 2026-04-25 at 07.44.16 (1).jpeg',
      '/assets/Projects/Cont/WhatsApp Image 2026-04-25 at 07.44.16 (2).jpeg',
      '/assets/Projects/Cont/WhatsApp Image 2026-04-25 at 07.44.16 (3).jpeg',
    ],
    privateGithub: true,
    demoLink: 'https://ab-lab.es/contabilidad-domestica/',
    downloads: [
      {
        label: 'Android',
        url: 'https://play.google.com/store/apps/details?id=com.abrahamperez.contabilidaddomestica&utm_source=emea_Med',
      },
      {
        label: 'Apple — Próximamente',
        url: '',
        comingSoon: true,
      },
    ],
    tags: ['Flutter', 'iOS', 'Android'],
  },
  {
    id: 'midosis',
    title: 'MiDosis',
    description:
      'Native Kotlin Android app for managing medication for the whole family — people and pets — with smart reminders, a digital medicine cabinet and treatment tracking.',
    category: 'development',
    image: '/assets/Projects/dosis/logo.jpg',
    heroImage: '/assets/Projects/dosis/hero.jpg',
    logo: '/assets/Projects/dosis/logo.jpg',
    privateGithub: true,
    demoLink: 'https://ab-lab.es/midosis/',
    tags: ['Kotlin', 'Android'],
  },
  {
    id: 'examen-test-pnb',
    title: 'Examen Test PNB',
    description:
      'Flutter app to prepare for the PNB (Patrón de Navegación Básica) nautical license exam in Spain. 400+ official questions, flashcards, illustrated study guide and exam simulator. Free with ads, available on Android and iOS.',
    category: 'development',
    image: '/assets/Projects/pnb/logo.jpg',
    heroImage: '/assets/Projects/pnb/fondo2.webp',
    logo: '/assets/Projects/pnb/logo.jpg',
    screenshots: [
      '/assets/Projects/pnb/Captura de pantalla 2026-02-14 165828.jpg',
      '/assets/Projects/pnb/Captura de pantalla 2026-02-14 165840.jpg',
      '/assets/Projects/pnb/Captura de pantalla 2026-02-14 165900.jpg',
      '/assets/Projects/pnb/Captura de pantalla 2026-02-14 170046.jpg',
      '/assets/Projects/pnb/Captura de pantalla 2026-02-14 170057.jpg',
      '/assets/Projects/pnb/Captura de pantalla 2026-02-14 170113.jpg',
      '/assets/Projects/pnb/Captura de pantalla 2026-02-14 170134.jpg',
      '/assets/Projects/pnb/Captura de pantalla 2026-02-14 170148.jpg',
      '/assets/Projects/pnb/Captura de pantalla 2026-02-14 170159.jpg',
      '/assets/Projects/pnb/Captura de pantalla 2026-02-14 170216.jpg',
      '/assets/Projects/pnb/Captura de pantalla 2026-02-14 170234.jpg',
    ],
    privateGithub: true,
    demoLink: 'https://ab-lab.es/licencia-pnb/',
    downloads: [
      {
        label: 'Android',
        url: 'https://play.google.com/store/apps/details?id=com.ablab.aprobar_examen_pnb&pcampaignid=web_share',
      },
      {
        label: 'Apple',
        url: 'https://apps.apple.com/us/app/test-patr%C3%B3n-b%C3%A1sico-navegaci%C3%B3n/id6763227368',
      },
    ],
    tags: ['Flutter', 'iOS', 'Android'],
  },
  {
    id: 'dropson-web',
    hidden: true,
    title: 'Dropson',
    description:
      'Corporate website for Dropson built with WordPress + Kadence. Professional presentation, accessibility, and easy content management.',
    category: 'development',
    image: '/assets/Projects/dropson.png',
    demoLink: 'https://dropson.es',
    tags: ['WordPress', 'Web'],
  },
  {
    id: 'hiking-routes',
    hidden: true,
    title: 'Hiking Routes',
    description:
      'PHP web platform for discovering, sharing, and managing hiking routes. Community-driven content with a focus on simplicity and usability.',
    category: 'development',
    image: '/assets/Projects/hik.png',
    ghLink: 'https://github.com/Abraham1515/Hiking-routes',
    tags: ['PHP', 'Web'],
  },
  {
    id: 'veredict',
    hidden: true,
    title: 'Veredict',
    description:
      'Android quiz game built in Unity combining trivia with interactive minigames. Focus on engagement, progression, and replayability.',
    category: 'development',
    image: '/assets/Projects/v.png',
    ghLink: 'https://github.com/Abraham1515/Veredict',
    tags: ['Unity', 'C#', 'Android'],
  },

  // ── Branding / Design ─────────────────────────────────────────────────────────
  {
    id: 'spanish-food',
    title: 'The Spanish Food Store',
    description: 'Branding for a company selling Spanish Gourmet products in the United States.',
    category: 'branding',
    image: '/assets/Design/spanishfood.png',
  },
  {
    id: 'panaghia',
    title: 'Panaghia',
    description:
      'Branding for a confectionery and café in Alcantarilla, Murcia. Inspired by the name\'s meaning — craftsmanship, elegance, and premium quality.',
    category: 'branding',
    image: '/assets/Design/pan.png',
  },
  {
    id: 'manolhigos',
    title: 'Manolhigos',
    description:
      'Branding for a fig producer from Almoharín, Extremadura. Timeless, handcrafted visual language emphasizing origin and craftsmanship.',
    category: 'branding',
    image: '/assets/Design/man.png',
  },
  {
    id: 'biocomercio',
    hidden: true,
    title: 'Biocomercio',
    description:
      'Branding for an organic products brand. Clean, friendly visual language conveying naturalness, trust, and sustainability.',
    category: 'branding',
    image: '/assets/Design/bio.jpg',
  },
  {
    id: 'plateros',
    title: "Platero's",
    description: 'Branding for a specialty coffee shop in the center of Madrid.',
    category: 'branding',
    image: '/assets/Design/platero.png',
  },
  {
    id: 'madrid-prime',
    title: 'Madrid Prime Estates',
    description:
      'Branding for a high-end real estate agency in Madrid. Exclusivity, professionalism, and trust aligned with a premium market.',
    category: 'branding',
    image: '/assets/Design/mps.png',
  },
  {
    id: 'movik',
    title: 'Movik',
    description:
      'Branding for an adaptive mobility solutions company. Inclusive, performance-driven design for people with reduced mobility.',
    category: 'branding',
    image: '/assets/Design/movik2.png',
  },
  {
    id: 'tab',
    title: 'The Authentic American Burger',
    description:
      'Branding for a burger restaurant in Guardamar inspired by classic American burger culture.',
    category: 'branding',
    image: '/assets/Design/tab.png',
  },
  {
    id: 'dropson-brand',
    title: 'Dropson Rebranding',
    description:
      'Visual identity rebranding for a water filtration company. Technological focus, sustainability values, and modern positioning.',
    category: 'branding',
    image: '/assets/Design/dropson.png',
  },
  {
    id: 'mommy-blue',
    imageScale: 0.85,
    title: 'Mommy Blue',
    description:
      'Branding for a terrace club in Orihuela Costa. Tropical atmosphere with African beats influences — exclusivity and distinctive nightlife.',
    category: 'branding',
    image: '/assets/Design/mb.jpg',
  },
  {
    id: 'orygen',
    imageScale: 1.3,
    title: 'Orygen Gym Club',
    description:
      'Branding for a fitness center in Guardamar. Strength, performance, and modernity through a bold typographic and industrial aesthetic.',
    category: 'branding',
    image: '/assets/Design/ori.jpg',
  },
  {
    id: 'guido',
    title: 'Guido Audisio',
    description:
      'Dental clinic rebranding in Torrevieja. Clean, modern, and professional — reinforcing trust and clinical precision.',
    category: 'branding',
    image: '/assets/Design/guido.jpg',
  },
  {
    id: 'pitstop',
    title: 'PitStop Food Race',
    description:
      'Branding for a motorsport-inspired burger restaurant. Racing aesthetics, speed, and power translated into a bold brand experience.',
    category: 'branding',
    image: '/assets/Design/pitstop.png',
  },
  {
    id: 'clicknoise',
    title: 'Clicknoise',
    description: 'Bold, contemporary brand identity for a creative digital studio.',
    category: 'branding',
    image: '/assets/Design/click.png',
  },
  {
    id: 'algo-vital',
    title: 'Algo Vital',
    description:
      'Branding for a nutritional supplements brand. Trust, clarity, and balance with a professional, pharmaceutical-oriented positioning.',
    category: 'branding',
    image: '/assets/Design/algo.png',
  },
  {
    id: 'auto-bavaria',
    title: 'Auto Bavaria',
    description:
      'Branding for a BMW-focused car rental service in Spain. Premium quality, reliability, and performance.',
    category: 'branding',
    image: '/assets/Design/bava.jpg',
  },
  {
    id: 'bachata-sensual',
    title: 'Bachata Sensual',
    description:
      'Branding for a bachata dance school and event organization in Germany. Movement, passion, and elegance.',
    category: 'branding',
    image: '/assets/Design/bs.png',
  },
  {
    id: 'barberia',
    title: 'Barbería Juan Rodríguez',
    description:
      'Branding for a barbershop in Elche. Classic barber aesthetics with a clean, contemporary approach.',
    category: 'branding',
    image: '/assets/Design/barb.png',
  },
  {
    id: 'bergerat',
    title: 'Bergerat Used',
    description:
      "Branding for Bergerat Monoyeur's used machinery division. Clear identity reinforcing reliability and trust in the second-hand market.",
    category: 'branding',
    image: '/assets/Design/berg.png',
  },
  {
    id: 'biome-makers',
    title: 'Biome Makers',
    description:
      'Branding for a biotech company specialized in soil microbiome analysis. Scientific rigor and technological innovation as a modern, trustworthy identity.',
    category: 'branding',
    image: '/assets/Design/bmk.png',
  },
  {
    id: 'cervera-molina',
    title: 'Cervera & Molina Abogados',
    description:
      'Branding for a law firm. Elegant and timeless identity conveying solidity, trust, and professional rigor.',
    category: 'branding',
    image: '/assets/Design/cer.png',
  },
  {
    id: 'ferso',
    title: 'Ferso',
    description:
      'Branding for a construction company. Solidity, precision, and reliability with a strong industrial character.',
    category: 'branding',
    image: '/assets/Design/fer.png',
  },
  {
    id: 'ganimedes',
    title: 'Ganímedes',
    description:
      'Branding for a blockchain initiative. Innovation, scalability, and forward momentum with futuristic aesthetics.',
    category: 'branding',
    image: '/assets/Design/gani.png',
  },
  {
    id: 'ingelanz',
    title: 'Ingelanz',
    description:
      'Branding for a green engineering company in Lanzarote. Sustainability, technical expertise, and environmental responsibility.',
    category: 'branding',
    image: '/assets/Design/inge.jpg',
  },
  {
    id: 'iscalis',
    title: 'Iscalis Abogados',
    description:
      'Branding for a law firm. Clean, elegant, and contemporary identity conveying professionalism and trust.',
    category: 'branding',
    image: '/assets/Design/isca.png',
  },
  {
    id: 'la-vieja-calle',
    imageScale: 1.15,
    title: 'La Vieja Calle',
    description:
      'Restaurant branding conveying a classic, premium identity inspired by traditional cuisine and refined dining.',
    category: 'branding',
    image: '/assets/Design/lav.png',
  },
  {
    id: 'lunn',
    title: 'Lünn',
    description:
      'Branding for a dental laboratory. Clean, modern, and professional — emphasizing precision and trust.',
    category: 'branding',
    image: '/assets/Design/lun.jpeg',
  },
]
