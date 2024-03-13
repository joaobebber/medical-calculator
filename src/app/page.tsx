'use client'

import Link from 'next/link'
import { useContext } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Title } from '@/components/Title'
import { AuthContext } from '@/contexts/AuthContext'

export default function Home() {
  const { user } = useContext(AuthContext)

  console.log(user)

  return (
    <Container>
      <Title>Escolha a categoria</Title>

      <Link href="/dosage">
        <Button>Dosagem</Button>
      </Link>
    </Container>
  )
}
