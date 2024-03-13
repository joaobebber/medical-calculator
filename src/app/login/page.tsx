'use client'

import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Form } from '@/components/Form'
import { Title } from '@/components/Title'
import { AuthContext } from '@/contexts/AuthContext'

import { LoginData, resolver } from './data-validation'
import styles from './page.module.css'

export default function Login() {
  const loginForm = useForm<LoginData>({ resolver })
  const { signIn } = useContext(AuthContext)

  const { handleSubmit, formState: { isSubmitting } } = loginForm

  async function handleLogin({ email, password }: LoginData) {
    console.log('Email: ', email, ' Password: ', password)

    // Fazer tratativa de erros (retorno do backend)
    await signIn({ email, password })
  }

  return (
    <Container className={styles.spacing}>
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
    </Container>
  )
}
