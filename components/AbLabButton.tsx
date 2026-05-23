'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function AbLabButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="https://ab-lab.es"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors text-sm font-medium"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src="/assets/Projects/About/logo.svg"
        alt="Ab-Lab"
        width={16}
        height={16}
        style={{
          filter: hovered
            ? 'brightness(0) saturate(100%) invert(48%) sepia(87%) saturate(889%) hue-rotate(337deg) brightness(106%)'
            : 'brightness(0) invert(1)',
          transition: 'filter 200ms',
        }}
      />
      Ab-Lab
    </a>
  )
}
