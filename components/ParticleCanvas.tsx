'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  rotation: number
  rotationSpeed: number
  opacity: number
  chaseSpeed: number
}

function drawX(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  rotation: number,
  opacity: number
) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rotation)
  ctx.globalAlpha = opacity
  ctx.strokeStyle = '#FF5C35'
  ctx.lineWidth = 1.5
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.moveTo(-size, -size)
  ctx.lineTo(size, size)
  ctx.moveTo(size, -size)
  ctx.lineTo(-size, size)
  ctx.stroke()
  ctx.restore()
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999, active: false })
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      init()
    }

    function init() {
      if (!canvas) return
      const count = Math.floor((canvas.width * canvas.height) / 18000)
      particlesRef.current = Array.from({ length: Math.min(count, 70) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 6 + 3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        opacity: Math.random() * 0.35 + 0.08,
        chaseSpeed: Math.random() * 0.025 + 0.008,
      }))
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      }
    }
    const onMouseLeave = () => {
      mouseRef.current.active = false
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    function animate() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const { x: mx, y: my, active } = mouseRef.current

      for (const p of particlesRef.current) {
        if (active) {
          const dx = mx - p.x
          const dy = my - p.y
          const dist = Math.sqrt(dx * dx + dy * dy) || 1
          // Accelerate toward mouse, stronger when closer
          const force = p.chaseSpeed * Math.min(300 / dist, 3)
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        } else {
          // Gentle wander nudge when mouse is away
          p.vx += (Math.random() - 0.5) * 0.02
          p.vy += (Math.random() - 0.5) * 0.02
        }

        // Speed cap + friction
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        const maxSpeed = active ? 5 : 1.2
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed
          p.vy = (p.vy / speed) * maxSpeed
        }
        p.vx *= 0.96
        p.vy *= 0.96

        p.x += p.vx
        p.y += p.vy
        p.rotation += p.rotationSpeed

        // Wrap edges
        if (p.x < -20) p.x = canvas.width + 20
        else if (p.x > canvas.width + 20) p.x = -20
        if (p.y < -20) p.y = canvas.height + 20
        else if (p.y > canvas.height + 20) p.y = -20

        drawX(ctx, p.x, p.y, p.size, p.rotation, p.opacity)
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      ro.disconnect()
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}
