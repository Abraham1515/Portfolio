'use client'

import { AiOutlinePrinter } from 'react-icons/ai'

export default function PrintButton({ label }: { label: string }) {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent-light transition-colors duration-200"
    >
      <AiOutlinePrinter size={18} />
      {label}
    </button>
  )
}
