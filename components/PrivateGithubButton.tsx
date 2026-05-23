'use client'

import { useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'

interface Props {
  label: string
  modalTitle: string
  modalBody: string
  ctaLabel: string
  closeLabel: string
  contactEmail: string
}

export default function PrivateGithubButton({
  label,
  modalTitle,
  modalBody,
  ctaLabel,
  closeLabel,
  contactEmail,
}: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors text-sm font-medium"
      >
        <AiFillGithub size={16} />
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-surface border border-border rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <AiFillGithub size={22} className="text-muted flex-shrink-0" />
              <h2 className="font-display font-bold text-text text-lg">{modalTitle}</h2>
            </div>
            <p className="text-muted leading-relaxed mb-6">{modalBody}</p>
            <div className="flex gap-3">
              <a
                href={`mailto:${contactEmail}`}
                className="flex-1 flex items-center justify-center px-4 py-2 rounded-full bg-accent text-white hover:bg-accent-light transition-colors text-sm font-medium"
              >
                {ctaLabel}
              </a>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors text-sm font-medium"
              >
                {closeLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
