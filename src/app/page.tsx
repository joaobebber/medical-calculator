'use client'

import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import { useContext, useEffect } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Title } from '@/components/Title'
import { AuthContext } from '@/contexts/AuthContext'
import { api } from '@/services/api'
import { getAPIClient } from '@/services/axios'

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user } = useContext(AuthContext)

  useEffect(() => {
    // api.get('/users')
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

// NAO SUPORTADO!
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx)
  const { '@medcalc.token': token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  await apiClient.get('/users')

  return {
    props: {}
  }
}
