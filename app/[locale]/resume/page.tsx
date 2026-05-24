import { useTranslations } from 'next-intl'
import { AiOutlineDownload } from 'react-icons/ai'
import ResumeDocument from '@/components/ResumeDocument'

export default function ResumePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('resume')
  const lang = locale === 'es' ? 'es' : 'en'

  return (
    <section className="pt-32 pb-24 px-6 min-h-screen print:pt-0 print:pb-0 print:px-0">
      <div className="max-w-4xl mx-auto print:max-w-none">
        <div className="print:hidden flex items-center justify-between mb-12">
          <h1 className="font-display font-bold text-5xl text-text">{t('heading')}</h1>
          <div className="flex gap-3">
            <a
              href={lang === 'es' ? '/assets/abrahamCV.pdf' : '/assets/abrahamCV-en.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-border text-muted rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-200"
            >
              <AiOutlineDownload size={18} />
              {t('download')}
            </a>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border shadow-sm print:border-0 print:rounded-none print:shadow-none">
          <ResumeDocument lang={lang} />
        </div>
      </div>
    </section>
  )
}
