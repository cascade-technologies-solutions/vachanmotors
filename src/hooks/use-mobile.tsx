
import * as React from "react"

// Mobile breakpoint (below this is considered mobile)
const MOBILE_BREAKPOINT = 768
// Tablet breakpoint (below this is considered tablet)
const TABLET_BREAKPOINT = 1024
// Desktop breakpoint
const DESKTOP_BREAKPOINT = 1280

// Safe window check helper
const isBrowser = typeof window !== 'undefined'

// Custom hook for safely getting window dimensions
const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: isBrowser ? window.innerWidth : 0,
    height: isBrowser ? window.innerHeight : 0,
  })

  React.useEffect(() => {
    if (!isBrowser) return

    // Handler to call on window resize
    const handleResize = () => {
      // Debounce the resize event
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }, 100)
    }
    
    let timeoutId: NodeJS.Timeout | null = null
    
    // Add event listener
    window.addEventListener("resize", handleResize)
    
    // Call handler right away so state gets updated with initial window size
    handleResize()
    
    // Remove event listener on cleanup
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      window.removeEventListener("resize", handleResize)
    }
  }, []) // Empty array ensures effect runs only on mount and unmount

  return windowSize
}

export function useIsMobile() {
  // Use the window size hook instead of directly accessing window
  const { width } = useWindowSize()
  return width > 0 && width < MOBILE_BREAKPOINT
}

export function useIsTablet() {
  const { width } = useWindowSize()
  return width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT
}

export function useIsDesktop() {
  const { width } = useWindowSize()
  return width >= DESKTOP_BREAKPOINT
}

export function useDeviceType() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isDesktop = useIsDesktop()
  
  if (isMobile) return 'mobile'
  if (isTablet) return 'tablet'
  if (isDesktop) return 'desktop'
  return 'laptop'
}
