import { useCallback, useEffect, useRef, useState } from 'react'

export function useHorizontalSnapCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const updateActiveIndex = useCallback(() => {
    const scrollEl = scrollRef.current
    if (!scrollEl) return

    const center = scrollEl.scrollLeft + scrollEl.clientWidth / 2
    let closest = 0
    let minDistance = Infinity

    cardRefs.current.forEach((card, index) => {
      if (!card) return
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const distance = Math.abs(center - cardCenter)
      if (distance < minDistance) {
        minDistance = distance
        closest = index
      }
    })

    setActiveIndex(closest)
  }, [])

  const scrollToCard = useCallback((index: number) => {
    const card = cardRefs.current[index]
    const scrollEl = scrollRef.current
    if (!card || !scrollEl) return

    const target =
      card.offsetLeft - scrollEl.clientWidth / 2 + card.offsetWidth / 2

    scrollEl.scrollTo({ left: target, behavior: 'smooth' })
  }, [])

  const setCardRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      cardRefs.current[index] = el
    },
    [],
  )

  useEffect(() => {
    const scrollEl = scrollRef.current
    if (!scrollEl) return

    updateActiveIndex()
    scrollEl.addEventListener('scroll', updateActiveIndex, { passive: true })
    window.addEventListener('resize', updateActiveIndex)

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
      event.preventDefault()
      scrollEl.scrollLeft += event.deltaY
    }

    scrollEl.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      scrollEl.removeEventListener('scroll', updateActiveIndex)
      window.removeEventListener('resize', updateActiveIndex)
      scrollEl.removeEventListener('wheel', onWheel)
    }
  }, [updateActiveIndex])

  return { scrollRef, activeIndex, scrollToCard, setCardRef }
}
