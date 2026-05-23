'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { locales, type Locale } from '@/i18n'

const localeLabels: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
  fr: 'FR',
  de: 'DE',
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const pathname = usePathname()
  const locale = useLocale() as Locale
  const t = useTranslations('nav')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/', label: t('home') },
    { href: '/projects', label: t('work') },
    { href: '/about', label: t('about') },
    { href: '/resume', label: t('resume') },
  ]

  function getLocalePath(newLocale: Locale) {
    const segments = pathname.split('/').filter(Boolean)
    if (locales.includes(segments[0] as Locale)) segments.shift()
    const path = segments.length ? `/${segments.join('/')}` : '/'
    return newLocale === 'en' ? path : `/${newLocale}${path}`
  }

  function isActive(href: string) {
    const segments = pathname.split('/').filter(Boolean)
    if (locales.includes(segments[0] as Locale)) segments.shift()
    const current = '/' + segments.join('/')
    return href === '/' ? current === '/' || current === '' : current.startsWith(href)
  }

  function localLink(href: string) {
    if (locale === 'en') return href
    return `/${locale}${href}`
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={localLink('/')} className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Abraham Pérez"
            width={40}
            height={28}
            className="h-7 w-auto"
            unoptimized
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={localLink(href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  isActive(href) ? 'text-text' : 'text-muted'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors text-xs font-semibold tracking-wider"
            >
              {localeLabels[locale]}
              <svg
                className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-surface border border-border rounded-xl overflow-hidden shadow-xl min-w-[80px]">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={getLocalePath(l)}
                    onClick={() => setLangOpen(false)}
                    className={`block px-4 py-2 text-xs font-semibold tracking-wider transition-colors hover:bg-card hover:text-accent ${
                      l === locale ? 'text-accent' : 'text-muted'
                    }`}
                  >
                    {localeLabels[l]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="mailto:ap94143@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors duration-200"
          >
            {t('contact')}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted hover:text-text"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={localLink(href)}
              onClick={() => setOpen(false)}
              className={`text-base font-medium transition-colors duration-200 hover:text-accent ${
                isActive(href) ? 'text-text' : 'text-muted'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            {locales.map((l) => (
              <Link
                key={l}
                href={getLocalePath(l)}
                onClick={() => setOpen(false)}
                className={`px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wider transition-colors ${
                  l === locale
                    ? 'border-accent text-accent'
                    : 'border-border text-muted hover:border-accent hover:text-accent'
                }`}
              >
                {localeLabels[l]}
              </Link>
            ))}
          </div>
          <a
            href="mailto:ap94143@gmail.com"
            className="mt-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-sm font-medium w-fit"
          >
            {t('contact')}
          </a>
        </div>
      )}
    </header>
  )
}
