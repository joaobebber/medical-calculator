'use client'

import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Title } from '@/components/Title'

export default function Home() {
  return (
    <Container>
      <Title>Escolha a categoria</Title>

      <Link href="/dosage">
        <Button>Dosagem</Button>
      </Link>
    </Container>
  )
}
