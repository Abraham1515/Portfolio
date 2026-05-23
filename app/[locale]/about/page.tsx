import { useTranslations } from 'next-intl'
import Image from 'next/image'
import TechStack from '@/components/TechStack'
import AbLabButton from '@/components/AbLabButton'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

export default function AboutPage() {
  const t = useTranslations('about')

  return (
    <section className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">

        <div className="mb-20">
          <h1
            className="font-display font-bold text-text mb-12 leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            {t('heading')}<br />
            <span className="text-accent">{t('heading_accent')}</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-muted text-lg leading-relaxed">
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
              <p>{t('p3')}</p>
              <p>{t('p4')}</p>
              <p>{t('p5')}</p>
            </div>

            <div className="aspect-square rounded-2xl overflow-hidden border border-border">
              <Image
                src="/assets/Projects/About/about.jpeg"
                alt="Abraham Pérez"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-20">
          <a
            href="https://github.com/abraham1515"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors text-sm font-medium"
          >
            <AiFillGithub size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abraham-p%C3%A9rez-rodr%C3%ADguez-00646bb1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors text-sm font-medium"
          >
            <FaLinkedinIn size={16} /> LinkedIn
          </a>
          <a
            href="mailto:ap94143@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors text-sm font-medium"
          >
            <AiOutlineMail size={16} /> Email
          </a>
          <AbLabButton />
        </div>

        <div className="mb-20">
          <h2 className="font-display font-bold text-3xl text-text mb-10">{t('skills_heading')}</h2>
          <TechStack />
        </div>

        <div>
          <h2 className="font-display font-bold text-3xl text-text mb-8">{t('beyond_heading')}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: '🎮', key: 'interest_games', href: undefined },
              { emoji: '✍️', key: 'interest_novel', href: 'https://cuentosmiserables.com/' },
              { emoji: '🌍', key: 'interest_nature', href: undefined },
              { emoji: '👶', key: 'interest_father', href: undefined },
            ].map(({ emoji, key, href }) => (
              <div
                key={key}
                className="p-5 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-colors"
              >
                <div className="text-2xl mb-2">{emoji}</div>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted text-sm hover:text-accent transition-colors"
                  >
                    {t(key as any)}
                  </a>
                ) : (
                  <p className="text-muted text-sm">{t(key as any)}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
