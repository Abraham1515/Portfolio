'use client'

import Typewriter from 'typewriter-effect'

export default function TypewriterEffect() {
  return (
    <Typewriter
      options={{
        strings: [
          'Web Developer',
          'UX/UI Designer',
          'Brand Designer',
          'Digital Strategist',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        delay: 60,
      }}
    />
  )
}
