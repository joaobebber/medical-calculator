'use client'

import Link from 'next/link'
import { useContext, useEffect } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Title } from '@/components/Title'
import { AuthContext } from '@/contexts/AuthContext'
import { api } from '@/services/api'

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user } = useContext(AuthContext)

  useEffect(() => {
    api.get('/users')
  }, [])

  return (
    <Container>
      <Title>Escolha a categoria</Title>

      <Link href="/dosage">
        <Button>Dosagem</Button>
      </Link>
    </Container>
  )
}
