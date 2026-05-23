'use client'

import { AppDownloadLink } from '@/lib/projects'
import { HiExternalLink } from 'react-icons/hi'

interface Props {
  downloads: AppDownloadLink[]
}

export default function AppDownloadButtons({ downloads }: Props) {
  if (!downloads || downloads.length === 0) return null

  return (
    <div className="flex flex-wrap gap-3 my-10">
      {downloads.map((download) =>
        download.comingSoon ? (
          <span
            key={download.label}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted/40 text-sm font-medium cursor-default select-none"
          >
            <HiExternalLink size={16} />
            {download.label}
          </span>
        ) : (
          <a
            key={download.url}
            href={download.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-200 text-sm font-medium"
          >
            <HiExternalLink size={16} />
            {download.label}
          </a>
        )
      )}
    </div>
  )
}
