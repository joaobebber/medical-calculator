'use client'

import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Form } from '@/components/Form'
import { RouteLink } from '@/components/RouteLink'
import { Title } from '@/components/Title'
import { AuthContext } from '@/contexts/AuthContext'

import { LoginData, resolver } from './data-validation'

export default function Login() {
  const { signIn } = useContext(AuthContext)

  const loginForm = useForm<LoginData>({ resolver })

  const { handleSubmit, formState: { isSubmitting } } = loginForm

  async function handleLogin({ email, password }: LoginData) {
    const result = await signIn({ email, password })

    if (result?.error) {
      toast.error(result.error)
    } else {
      toast.success('Bem-vinda! 🎉')
    }
  }

  return (
    <Container>
      <Title>Login</Title>

      <FormProvider {...loginForm}>
        <Form.Root onSubmit={handleSubmit(handleLogin)}>
          <Form.Field>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Input name='email' placeholder='email@exemplo.com' />
            <Form.ErrorMessage field='email' />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor='password'>Senha</Form.Label>
            <Form.Input type='password' name='password' placeholder='******' />
            <Form.ErrorMessage field='password' />
          </Form.Field>

          <Button type='submit' disabled={isSubmitting}>Entrar</Button>
        </Form.Root>
      </FormProvider>

      <RouteLink href="/register">Ainda não tem uma conta?</RouteLink>
    </Container>
  )
}
