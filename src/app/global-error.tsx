'use client'

import { useEffect } from 'react'

import { Button } from '@/components/Button'

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => console.error(error), [error])

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>

        <Button onClick={() => reset()}>
          Try again
        </Button>
      </body>
    </html>
  )
}
