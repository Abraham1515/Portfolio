'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { useTranslations } from 'next-intl'
import type { Project } from '@/lib/projects'

interface Props {
  project: Project
  href?: string
}

export default function ProjectCard({ project, href }: Props) {
  const t = useTranslations('projects')
  const tContent = useTranslations('project_content')
  const [hovered, setHovered] = useState(false)

  const isBranding = project.category === 'branding'
  const baseScale = project.imageScale ?? 0.85
  const imageScale = isBranding ? baseScale * (hovered ? 1.08 : 1) : undefined

  const inner = (
    <div
      className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0 bg-white">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={isBranding ? 'object-contain' : 'object-cover transition-transform duration-500 group-hover:scale-105'}
          style={isBranding ? { transform: `scale(${imageScale})`, transition: 'transform 500ms' } : undefined}
          unoptimized
        />
        {href && (
          <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
            <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center">
              <HiArrowRight size={16} className="text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-accent font-medium uppercase tracking-wider">
            {project.category === 'development' ? t('category_development') : t('category_branding')}
          </span>
          {project.tags && (
            <div className="flex gap-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-muted bg-surface px-2 py-0.5 rounded-full border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <h3 className="font-display font-semibold text-text text-base mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed line-clamp-2 flex-1">
          {tContent(project.id)}
        </p>
      </div>
    </div>
  )

  if (href) return <Link href={href} className="block">{inner}</Link>
  return inner
}
