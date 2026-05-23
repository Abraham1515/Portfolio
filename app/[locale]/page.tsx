import Link from 'next/link'
import { useTranslations } from 'next-intl'
import TypewriterEffect from '@/components/TypewriterEffect'
import ProjectCard from '@/components/ProjectCard'
import ParticleCanvas from '@/components/ParticleCanvas'
import { projects } from '@/lib/projects'

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations()
  const featured = projects.filter((p) => p.category === 'development').slice(0, 3)

  function projectHref(id: string) {
    return locale === 'en' ? `/projects/${id}` : `/${locale}/projects/${id}`
  }

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
        <ParticleCanvas />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <h1
            className="font-display font-bold leading-[0.88] tracking-tight text-text mb-6"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 9rem)' }}
          >
            ABRAHAM
            <br />
            <span className="text-accent">PÉREZ</span>
          </h1>

          <div className="font-display text-xl md:text-3xl text-muted mb-8 h-10">
            <TypewriterEffect />
          </div>

          <p className="text-muted text-lg max-w-xl mb-10 leading-relaxed">
            {t('hero.bio')}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-light transition-colors duration-200"
            >
              {t('hero.cta_work')}
            </Link>
            <a
              href="mailto:ap94143@gmail.com"
              className="px-6 py-3 border border-border text-text rounded-full font-medium hover:border-accent hover:text-accent transition-colors duration-200"
            >
              {t('hero.cta_contact')}
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl font-bold text-text">{t('home.selected_work')}</h2>
            <Link href="/projects" className="text-accent text-sm font-medium hover:text-accent-light transition-colors">
              {t('home.view_all')}
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} href={projectHref(project.id)} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-text mb-6 leading-tight">
              {t('home.about_heading')}
              <br />
              <span className="text-accent">{t('home.about_heading_accent')}</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">{t('home.about_bio')}</p>
            <Link href="/about" className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-light transition-colors">
              {t('home.about_link')}
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {['JavaScript','TypeScript','React','Next.js','React Native','Flutter','Kotlin','Node.js','PHP','Laravel','MySQL','Firebase','Docker','Figma','Adobe XD','Illustrator','Photoshop','Blender'].map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-full border border-border text-muted text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
