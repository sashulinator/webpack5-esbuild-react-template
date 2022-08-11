import { useOnMount } from './use-on-mount'
import { useState } from 'react'

export function useRenderDelay(ms: number) {
  const [isDelayed, setIsDelayed] = useState(true)

  useOnMount(() => {
    setTimeout(() => setIsDelayed(false), ms)
  })

  return { isDelayed, isRender: !isDelayed }
}
