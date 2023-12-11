import { useState, useEffect } from 'react'

/**
 * Returns the actual and previous scroll positions.
 *
 * @returns The actual and previous scroll positions.
 */
export function useScrollPosition() {
  const [actualScrollPosition, setActualScrollPosition] = useState(0)
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0)

  /**
   * Handles the scroll event and updates the actual scroll position.
   */
  const handleScroll = () => {
    setActualScrollPosition(window.scrollY)
  }

  useEffect(() => {
    setPreviousScrollPosition(actualScrollPosition)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [actualScrollPosition, previousScrollPosition])

  return {
    actualScrollPosition: actualScrollPosition,
    previousScrollPosition: previousScrollPosition,
  }
}
