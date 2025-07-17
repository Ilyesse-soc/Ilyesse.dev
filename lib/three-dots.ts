interface DotOptions {
  color: string
  dotSize: number
  dotCount: number
  maxDistance: number
  mouseInteraction: boolean
}

interface Dot {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export function init(canvas: HTMLCanvasElement, options: DotOptions) {
  const ctx = canvas.getContext("2d")
  if (!ctx) return

  const dots: Dot[] = []
  let width = (canvas.width = window.innerWidth)
  let height = (canvas.height = window.innerHeight)
  let mouseX = 0
  let mouseY = 0
  const mouseRadius = 150

  // Create dots
  function createDots() {
    dots.length = 0
    for (let i = 0; i < options.dotCount; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * options.dotSize + 1,
      })
    }
  }

  // Draw dots and connections
  function draw() {
    ctx.clearRect(0, 0, width, height)

    // Update and draw dots
    for (let i = 0; i < dots.length; i++) {
      const dot = dots[i]

      // Move dots
      dot.x += dot.vx
      dot.y += dot.vy

      // Bounce off edges
      if (dot.x < 0 || dot.x > width) dot.vx = -dot.vx
      if (dot.y < 0 || dot.y > height) dot.vy = -dot.vy

      // Draw dot
      ctx.beginPath()
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
      ctx.fillStyle = options.color
      ctx.fill()

      // Connect dots
      for (let j = i + 1; j < dots.length; j++) {
        const dot2 = dots[j]
        const dx = dot.x - dot2.x
        const dy = dot.y - dot2.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < options.maxDistance) {
          ctx.beginPath()
          ctx.moveTo(dot.x, dot.y)
          ctx.lineTo(dot2.x, dot2.y)
          ctx.strokeStyle = `${options.color}${Math.floor((1 - distance / options.maxDistance) * 50).toString(16)}`
          ctx.stroke()
        }
      }

      // Mouse interaction
      if (options.mouseInteraction) {
        const dx = dot.x - mouseX
        const dy = dot.y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRadius) {
          const angle = Math.atan2(dy, dx)
          const force = (mouseRadius - distance) / mouseRadius
          dot.vx += Math.cos(angle) * force * 0.1
          dot.vy += Math.sin(angle) * force * 0.1

          // Limit velocity
          const speed = Math.sqrt(dot.vx * dot.vx + dot.vy * dot.vy)
          if (speed > 2) {
            dot.vx = (dot.vx / speed) * 2
            dot.vy = (dot.vy / speed) * 2
          }
        }
      }
    }

    requestAnimationFrame(draw)
  }

  // Handle resize
  function handleResize() {
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
    createDots()
  }

  // Handle mouse move
  function handleMouseMove(e: MouseEvent) {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  // Initialize
  createDots()
  draw()

  // Event listeners
  window.addEventListener("resize", handleResize)
  if (options.mouseInteraction) {
    window.addEventListener("mousemove", handleMouseMove)
  }

  // Cleanup function
  return () => {
    window.removeEventListener("resize", handleResize)
    if (options.mouseInteraction) {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }
}
