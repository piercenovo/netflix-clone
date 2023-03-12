import { useEffect, useState } from 'react'

const TOP_OFFSET = 66

export function useScroll () {
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBackground(window.scrollY >= TOP_OFFSET)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { showBackground }
}
