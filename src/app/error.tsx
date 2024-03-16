'use client'

import { useEffect } from 'react'

import { Button } from '@/components/Button'
 
interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => console.error(error), [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>

      <Button onClick={() => reset()}>
        Try again
      </Button>
    </div>
  )
}
