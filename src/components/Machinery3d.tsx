// 'use client'

// import { useEffect, useRef } from 'react'

// export default function Machinery3D() {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     if (!canvasRef.current) return

//     const canvas = canvasRef.current
//     const ctx = canvas.getContext('2d')
//     if (!ctx) return

//     // Set canvas size
//     const resizeCanvas = () => {
//       canvas.width = canvas.offsetWidth
//       canvas.height = canvas.offsetHeight
//     }
//     resizeCanvas()
//     window.addEventListener('resize', resizeCanvas)

//     // Gear class
//     class Gear {
//       x: number
//       y: number
//       radius: number
//       teeth: number
//       rotation: number
//       speed: number
//       color: string

//       constructor(x: number, y: number, radius: number, teeth: number, speed: number, color: string) {
//         this.x = x
//         this.y = y
//         this.radius = radius
//         this.teeth = teeth
//         this.rotation = 0
//         this.speed = speed
//         this.color = color
//       }

//       draw(ctx: CanvasRenderingContext2D) {
//         ctx.save()
//         ctx.translate(this.x, this.y)
//         ctx.rotate(this.rotation)

//         // Draw gear
//         ctx.beginPath()
//         for (let i = 0; i < this.teeth; i++) {
//           const angle = (Math.PI * 2 * i) / this.teeth
//           const nextAngle = (Math.PI * 2 * (i + 1)) / this.teeth
          
//           // Outer tooth
//           const outerRadius = this.radius
//           const innerRadius = this.radius * 0.8
          
//           ctx.lineTo(Math.cos(angle) * outerRadius, Math.sin(angle) * outerRadius)
//           ctx.lineTo(Math.cos(angle + 0.1) * outerRadius, Math.sin(angle + 0.1) * outerRadius)
//           ctx.lineTo(Math.cos(nextAngle - 0.1) * outerRadius, Math.sin(nextAngle - 0.1) * outerRadius)
//           ctx.lineTo(Math.cos(nextAngle) * outerRadius, Math.sin(nextAngle) * outerRadius)
//           ctx.lineTo(Math.cos(nextAngle) * innerRadius, Math.sin(nextAngle) * innerRadius)
//         }
//         ctx.closePath()
        
//         // Gradient fill
//         const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius)
//         gradient.addColorStop(0, this.color)
//         gradient.addColorStop(1, this.color + '80')
//         ctx.fillStyle = gradient
//         ctx.fill()
        
//         ctx.strokeStyle = this.color
//         ctx.lineWidth = 2
//         ctx.stroke()

//         // Center circle
//         ctx.beginPath()
//         ctx.arc(0, 0, this.radius * 0.3, 0, Math.PI * 2)
//         ctx.fillStyle = '#1a1464'
//         ctx.fill()
//         ctx.strokeStyle = this.color
//         ctx.lineWidth = 3
//         ctx.stroke()

//         ctx.restore()
//       }

//       update() {
//         this.rotation += this.speed
//       }
//     }

//     // Create gears
//     const gears: Gear[] = [
//       new Gear(canvas.width * 0.2, canvas.height * 0.3, 80, 12, 0.01, '#f7931e'),
//       new Gear(canvas.width * 0.5, canvas.height * 0.4, 100, 16, -0.008, '#1a1464'),
//       new Gear(canvas.width * 0.75, canvas.height * 0.5, 70, 10, 0.012, '#f7931e'),
//       new Gear(canvas.width * 0.35, canvas.height * 0.7, 60, 8, -0.015, '#1a1464'),
//       new Gear(canvas.width * 0.65, canvas.height * 0.75, 90, 14, 0.009, '#f7931e'),
//     ]

//     // Animation loop
//     let animationFrameId: number
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)
      
//       // Draw gears
//       gears.forEach(gear => {
//         gear.update()
//         gear.draw(ctx)
//       })

//       animationFrameId = requestAnimationFrame(animate)
//     }
//     animate()

//     return () => {
//       window.removeEventListener('resize', resizeCanvas)
//       cancelAnimationFrame(animationFrameId)
//     }
//   }, [])

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 w-full h-full opacity-20"
//       style={{ mixBlendMode: 'screen' }}
//     />
//   )
// }
'use client'

import { useEffect, useRef } from 'react'

export default function Machinery3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class for floating effect
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(247, 147, 30, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Enhanced Gear class
    class Gear {
      x: number
      y: number
      radius: number
      teeth: number
      rotation: number
      speed: number
      color: string
      pulsePhase: number

      constructor(x: number, y: number, radius: number, teeth: number, speed: number, color: string) {
        this.x = x
        this.y = y
        this.radius = radius
        this.teeth = teeth
        this.rotation = 0
        this.speed = speed
        this.color = color
        this.pulsePhase = Math.random() * Math.PI * 2
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)

        // Pulsing effect
        const pulse = Math.sin(this.pulsePhase) * 0.05 + 1
        ctx.scale(pulse, pulse)

        // Shadow for depth
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
        ctx.shadowBlur = 15
        ctx.shadowOffsetX = 5
        ctx.shadowOffsetY = 5

        // Draw gear teeth
        ctx.beginPath()
        for (let i = 0; i < this.teeth; i++) {
          const angle = (Math.PI * 2 * i) / this.teeth
          const nextAngle = (Math.PI * 2 * (i + 1)) / this.teeth
          
          const outerRadius = this.radius
          const innerRadius = this.radius * 0.75
          const toothWidth = 0.15
          
          // Tooth shape
          ctx.lineTo(Math.cos(angle) * innerRadius, Math.sin(angle) * innerRadius)
          ctx.lineTo(Math.cos(angle + toothWidth) * outerRadius, Math.sin(angle + toothWidth) * outerRadius)
          ctx.lineTo(Math.cos(nextAngle - toothWidth) * outerRadius, Math.sin(nextAngle - toothWidth) * outerRadius)
          ctx.lineTo(Math.cos(nextAngle) * innerRadius, Math.sin(nextAngle) * innerRadius)
        }
        ctx.closePath()
        
        // Metallic gradient
        const gradient = ctx.createRadialGradient(-this.radius * 0.3, -this.radius * 0.3, 0, 0, 0, this.radius)
        gradient.addColorStop(0, this.color === '#f7931e' ? '#ffa500' : '#2a1f6f')
        gradient.addColorStop(0.5, this.color)
        gradient.addColorStop(1, this.color === '#f7931e' ? '#cc7700' : '#0d0820')
        ctx.fillStyle = gradient
        ctx.fill()
        
        // Outline
        ctx.strokeStyle = this.color === '#f7931e' ? '#ffc04d' : '#3d2f8f'
        ctx.lineWidth = 3
        ctx.stroke()

        // Inner ring
        ctx.beginPath()
        ctx.arc(0, 0, this.radius * 0.6, 0, Math.PI * 2)
        const innerGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius * 0.6)
        innerGradient.addColorStop(0, this.color === '#f7931e' ? '#ffa500' : '#2a1f6f')
        innerGradient.addColorStop(1, this.color === '#f7931e' ? '#cc7700' : '#1a1464')
        ctx.fillStyle = innerGradient
        ctx.fill()
        ctx.stroke()

        // Center hub with 3D effect
        ctx.shadowBlur = 10
        ctx.beginPath()
        ctx.arc(0, 0, this.radius * 0.25, 0, Math.PI * 2)
        const hubGradient = ctx.createRadialGradient(-5, -5, 0, 0, 0, this.radius * 0.25)
        hubGradient.addColorStop(0, '#ffffff')
        hubGradient.addColorStop(0.3, this.color === '#f7931e' ? '#ffcc80' : '#4d4d9a')
        hubGradient.addColorStop(1, this.color === '#f7931e' ? '#cc7700' : '#0d0820')
        ctx.fillStyle = hubGradient
        ctx.fill()
        ctx.strokeStyle = this.color === '#f7931e' ? '#ffd700' : '#5d4dc4'
        ctx.lineWidth = 4
        ctx.stroke()

        // Bolt holes
        for (let i = 0; i < 6; i++) {
          const boltAngle = (Math.PI * 2 * i) / 6
          const boltDistance = this.radius * 0.45
          ctx.beginPath()
          ctx.arc(
            Math.cos(boltAngle) * boltDistance,
            Math.sin(boltAngle) * boltDistance,
            this.radius * 0.06,
            0,
            Math.PI * 2
          )
          ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
          ctx.fill()
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'
          ctx.lineWidth = 1
          ctx.stroke()
        }

        ctx.restore()
      }

      update() {
        this.rotation += this.speed
        this.pulsePhase += 0.02
      }
    }

    // Create particles
    const particles: Particle[] = []
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle())
    }

    // Create gears with better positioning
    const gears: Gear[] = [
      new Gear(canvas.width * 0.15, canvas.height * 0.25, 90, 14, 0.008, '#f7931e'),
      new Gear(canvas.width * 0.45, canvas.height * 0.35, 120, 18, -0.006, '#1a1464'),
      new Gear(canvas.width * 0.78, canvas.height * 0.45, 85, 12, 0.01, '#f7931e'),
      new Gear(canvas.width * 0.28, canvas.height * 0.65, 75, 10, -0.012, '#1a1464'),
      new Gear(canvas.width * 0.65, canvas.height * 0.72, 100, 16, 0.007, '#f7931e'),
      new Gear(canvas.width * 0.88, canvas.height * 0.8, 65, 9, -0.015, '#1a1464'),
    ]

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw(ctx)
      })

      // Draw connection lines between some gears
      ctx.strokeStyle = 'rgba(247, 147, 30, 0.1)'
      ctx.lineWidth = 2
      ctx.setLineDash([5, 5])
      for (let i = 0; i < gears.length - 1; i++) {
        ctx.beginPath()
        ctx.moveTo(gears[i].x, gears[i].y)
        ctx.lineTo(gears[i + 1].x, gears[i + 1].y)
        ctx.stroke()
      }
      ctx.setLineDash([])

      // Draw gears
    //   gears.forEach(gear => {
    //     gear.update()
    //     gear.draw(ctx)
    //   })

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}