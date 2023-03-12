import { useCallback, useState } from 'react'

export function useToggleMenu () {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current)
  }, [])

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current)
  }, [])

  return { showMobileMenu, showAccountMenu, toggleMobileMenu, toggleAccountMenu }
}
