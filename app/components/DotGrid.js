'use client'
import { useEffect, useRef } from 'react'

const DotGrid = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const width = canvas.width = 900
    const height = canvas.height = 900
    const centerX = width / 2
    const centerY = height / 2

    const outerRadius = 370  // full extent of dot field
    const innerRadius = 140  // empty space in center
    const spacing = 20
    const dotRadius = 1.2

    ctx.clearRect(0, 0, width, height)

    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        const dx = x - centerX
        const dy = y - centerY
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Only draw outside inner circle and inside outer circle
        if (distance > innerRadius && distance < outerRadius && Math.random() > 0.15) {
          ctx.beginPath()
          ctx.arc(x, y, dotRadius, 0, 2 * Math.PI)
          ctx.fillStyle = '#444'
          ctx.fill()
        }
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-[100px] left-1/2 -translate-x-1/2 pointer-events-none z-0"
      style={{ opacity: 0.25, width: '900px', height: '900px' }}
    />
  )
}

export default DotGrid
