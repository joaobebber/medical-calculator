import Link from 'next/link'

import { Button } from '@/components/Button'
 
export default function NotFound() {
  return (
    <div>
      <h2>404 | Not Found</h2>
      <p>Não foi possível encontrar a página solicitada</p>
      <Button>
        <Link href="/">Página Inicial</Link>
      </Button>
    </div>
  )
}
