import { useTranslations } from 'next-intl'
import ProjectsClient from '@/components/ProjectsClient'

export default function ProjectsPage() {
  const t = useTranslations('projects')

  return (
    <ProjectsClient
      heading={t('heading')}
      headingAccent={t('heading_accent')}
      subheading={t('subheading')}
      filterAll={t('filter_all')}
      filterDev={t('filter_dev')}
      filterDesign={t('filter_design')}
      filterReact={t('filter_react')}
      filterRN={t('filter_rn')}
      filterFlutter={t('filter_flutter')}
      filterAndroid={t('filter_android')}
    />
  )
}
