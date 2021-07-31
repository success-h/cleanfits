import React, {useState, useEffect} from 'react'

export default function useScrollPosition(position) {
  const [scrollPosition, setScrollPosition] = useState(position)

  useEffect(() => {
    setScrollPosition(position)
    window.scrollTo(0, scrollPosition)
  }, [])

  return [scrollPosition, setScrollPosition]
}