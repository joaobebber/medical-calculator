'use client'

import { useParams } from 'next/navigation'
import { toast } from 'react-hot-toast'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Title } from '@/components/Title'
import { confirmAccount } from '@/http/confirmAccount'

export default function ConfirmAccount() {
  const { token } = useParams<{ token: string }>()

  async function handleConfirmAccount() {
    const result = await confirmAccount({ token })

    if (result?.error) {
      toast.error(result.error)
    } else {
      toast.success('Conta confirmada com sucesso! 🔖')
    }
  }

  return (
    <Container>
      <Title>Validação de Conta</Title>

      <Button onClick={handleConfirmAccount}>Confirmar</Button>
    </Container>
  )
}
