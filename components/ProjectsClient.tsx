'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'
import type { ProjectCategory } from '@/lib/projects'

type Filter = 'all' | ProjectCategory | 'react' | 'react-native' | 'flutter' | 'android'

interface Props {
  heading: string
  headingAccent: string
  subheading: string
  filterAll: string
  filterDev: string
  filterDesign: string
  filterReact: string
  filterRN: string
  filterFlutter: string
  filterAndroid: string
}

export default function ProjectsClient({
  heading,
  headingAccent,
  subheading,
  filterAll,
  filterDev,
  filterDesign,
  filterReact,
  filterRN,
  filterFlutter,
  filterAndroid,
}: Props) {
  const [active, setActive] = useState<Filter>('all')
  const locale = useLocale()

  function projectHref(id: string) {
    return locale === 'en' ? `/projects/${id}` : `/${locale}/projects/${id}`
  }

  const filters: { value: Filter; label: string }[] = [
    { value: 'all', label: filterAll },
    { value: 'development', label: filterDev },
    { value: 'branding', label: filterDesign },
    { value: 'react', label: filterReact },
    { value: 'react-native', label: filterRN },
    { value: 'flutter', label: filterFlutter },
    { value: 'android', label: filterAndroid },
  ]

  const visible = projects.filter((p) => !p.hidden)

  const filtered =
    active === 'all'
      ? visible
      : active === 'react'
        ? visible.filter((p) => p.tags?.includes('React'))
      : active === 'react-native'
        ? visible.filter((p) => p.tags?.includes('React Native'))
        : active === 'flutter'
          ? visible.filter((p) => p.tags?.includes('Flutter'))
          : active === 'android'
            ? visible.filter((p) => p.tags?.includes('Android'))
            : visible.filter((p) => p.category === active)

  return (
    <section className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1
          className="font-display font-bold text-text mb-4 leading-[0.9] tracking-tight"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          {heading}
          <br />
          <span className="text-accent">{headingAccent}</span>
        </h1>
        <p className="text-muted text-lg mb-12 max-w-xl">{subheading}</p>

        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === value
                  ? 'bg-accent text-white'
                  : 'border border-border text-muted hover:border-accent hover:text-accent'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              href={project.category === 'development' ? projectHref(project.id) : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
