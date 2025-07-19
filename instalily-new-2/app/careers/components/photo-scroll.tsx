"use client"

import { useRef, useEffect } from 'react'

interface PhotoScrollProps {
  photos: string[]
}

export function PhotoScroll({ photos }: PhotoScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const isHoveringRef = useRef(false)
  const baseSpeed = 1

  useEffect(() => {
    if (!containerRef.current) return

    const singleSetWidth = (containerRef.current.children[0] as HTMLElement).offsetWidth
    let lastFrameTime: number | null = null
    let currentPosition = 0

    const wrapPosition = (pos: number) => {
      while (pos <= -singleSetWidth) {
        pos += singleSetWidth
      }
      while (pos > 0) {
        pos -= singleSetWidth
      }
      return pos
    }

    const animate = (timestamp: number) => {
      if (isDraggingRef.current || isHoveringRef.current) {
        lastFrameTime = null
        requestAnimationFrame(animate)
        return
      }

      if (lastFrameTime === null) {
        lastFrameTime = timestamp
        requestAnimationFrame(animate)
        return
      }

      const deltaTime = (timestamp - lastFrameTime) / 1000
      lastFrameTime = timestamp

      currentPosition -= baseSpeed * deltaTime * 60
      currentPosition = wrapPosition(currentPosition)

      if (containerRef.current) {
        for (const child of containerRef.current.children) {
          (child as HTMLElement).style.transform = `translateX(${currentPosition}px)`
        }
      }

      requestAnimationFrame(animate)
    }

    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true
      startXRef.current = e.pageX - (containerRef.current?.offsetLeft || 0)
      scrollLeftRef.current = currentPosition
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return
      
      const x = e.pageX - (containerRef.current?.offsetLeft || 0)
      const delta = x - startXRef.current
      currentPosition = wrapPosition(scrollLeftRef.current + delta)

      if (containerRef.current) {
        for (const child of containerRef.current.children) {
          (child as HTMLElement).style.transform = `translateX(${currentPosition}px)`
        }
      }
    }

    const handleMouseUp = () => {
      isDraggingRef.current = false
    }

    const handleMouseEnter = () => {
      isHoveringRef.current = true
    }

    const handleMouseLeave = () => {
      isHoveringRef.current = false
      isDraggingRef.current = false
    }

    containerRef.current.addEventListener('mousedown', handleMouseDown)
    containerRef.current.addEventListener('mousemove', handleMouseMove)
    containerRef.current.addEventListener('mouseup', handleMouseUp)
    containerRef.current.addEventListener('mouseleave', handleMouseLeave)
    containerRef.current.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseup', handleMouseUp)

    const animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
      containerRef.current?.removeEventListener('mousedown', handleMouseDown)
      containerRef.current?.removeEventListener('mousemove', handleMouseMove)
      containerRef.current?.removeEventListener('mouseup', handleMouseUp)
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave)
      containerRef.current?.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  const photoElements = photos.map((url, index) => (
    <div key={index} className="h-64 md:h-96 flex-shrink-0 mx-2">
      <img
        src={url}
        draggable={false}
        alt={`Team ${index + 1}`}
        className="h-full object-cover rounded-lg"
        style={{
          aspectRatio: "7/5",
          maxWidth: "100%"
        }}
      />
    </div>
  ))

  return (
    <div className="relative w-full mt-8 cursor-grab">
      <div className="overflow-hidden flex" ref={containerRef}>
        <div className="flex items-center justify-start shrink-0">
          {photoElements}
        </div>
        <div className="flex items-center justify-start shrink-0">
          {photoElements}
        </div>
      </div>
    </div>
  )
} 