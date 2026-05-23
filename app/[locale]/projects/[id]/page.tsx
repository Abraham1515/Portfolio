import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { AiFillGithub } from 'react-icons/ai'
import { HiExternalLink } from 'react-icons/hi'
import { projects } from '@/lib/projects'
import { locales } from '@/i18n'
import ScreenshotGallery from '@/components/ScreenshotGallery'
import AppDownloadButtons from '@/components/AppDownloadButtons'
import PrivateGithubButton from '@/components/PrivateGithubButton'

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({ locale, id: project.id }))
  )
}

export default async function ProjectDetailPage({
  params: { locale, id },
}: {
  params: { locale: string; id: string }
}) {
  const project = projects.find((p) => p.id === id)
  if (!project) notFound()

  const t = await getTranslations('project_detail')
  const tProjects = await getTranslations('projects')
  const tContent = await getTranslations('project_content')
  const backHref = locale === 'en' ? '/projects' : `/${locale}/projects`
  const heroImage = project.heroImage ?? project.image
  const gallery = project.gallery ?? []
  const screenshots = project.screenshots ?? []

  return (
    <div className="min-h-screen pt-20">
      {/* Hero image */}
      <div className="relative w-full" style={{ height: '60vh' }}>
        <Image
          src={heroImage}
          alt={project.title}
          fill
          className="object-cover"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-10 pb-24">
        {/* Back */}
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm font-medium mb-10 group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t('back')}
        </Link>

        {/* Header */}
        <div className="mb-8">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 block">
            {project.category === 'development' ? tProjects('category_development') : tProjects('category_branding')}
          </span>
          <div className="flex items-center gap-4 mb-6">
            {project.logo && (
              <div className="flex-shrink-0">
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={60}
                  height={60}
                  className="rounded-[15px]"
                  unoptimized
                />
              </div>
            )}
            <h1
              className="font-display font-bold text-text leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}
            >
              {project.title}
            </h1>
          </div>

          {(project.ghLink || project.privateGithub || project.demoLink) && (
            <div className="flex flex-wrap gap-3">
              {project.ghLink && (
                <a
                  href={project.ghLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors text-sm font-medium"
                >
                  <AiFillGithub size={16} />
                  {t('view_github')}
                </a>
              )}
              {project.privateGithub && (
                <PrivateGithubButton
                  label={t('github_private')}
                  modalTitle={t('github_private_title')}
                  modalBody={t('github_private_body')}
                  ctaLabel={t('github_private_cta')}
                  closeLabel={t('github_private_close')}
                  contactEmail="ap94143@gmail.com"
                />
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white hover:bg-accent-light transition-colors text-sm font-medium"
                >
                  <HiExternalLink size={16} />
                  {t('live_demo')}
                </a>
              )}
            </div>
          )}
        </div>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border border-border text-muted text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-border mb-10" />

        {/* Description */}
        <p className="text-muted text-lg leading-relaxed whitespace-pre-line">
          {tContent(project.id)}
        </p>

        {/* Download buttons */}
        {project.downloads && project.downloads.length > 0 && (
          <AppDownloadButtons downloads={project.downloads} />
        )}

        {/* App screenshots — portrait format with lightbox */}
        {screenshots.length > 0 && (
          <ScreenshotGallery
            screenshots={screenshots}
            heading={t('screenshots_heading')}
          />
        )}

        {/* Artistic / editorial images */}
        {gallery.length > 0 && (
          <div className="mt-20">
            {/* First image: full width, natural proportions */}
            <div className="w-full rounded-2xl overflow-hidden border border-border mb-4">
              <Image
                src={gallery[0]}
                alt={`${project.title} — visual 1`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
                unoptimized
              />
            </div>

            {/* Remaining images: 3-column mosaic */}
            {gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {gallery.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="relative rounded-xl overflow-hidden border border-border"
                    style={{ height: '220px' }}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} — visual ${i + 2}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
