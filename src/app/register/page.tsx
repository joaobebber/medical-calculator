'use client'

import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Form } from '@/components/Form'
import { RouteLink } from '@/components/RouteLink'
import { Title } from '@/components/Title'
import { createUser } from '@/http/createUser'

import { RegisterData, resolver } from './data-validation'

export default function Register() {
  const registerForm = useForm<RegisterData>({ resolver })

  const { handleSubmit, formState: { isSubmitting } } = registerForm

  async function handleRegister({ name, email, password }: RegisterData) {
    const result = await createUser({
      name,
      email,
      password,
    })

    if (result?.error) {
      toast.error(result.error)
    } else {
      toast.success('Cadastro realizado com sucesso! 📝')
    }
  }

  return (
    <Container>
      <Title>Cadastro</Title>

      <FormProvider {...registerForm}>
        <Form.Root onSubmit={handleSubmit(handleRegister)}>
          <Form.Field>
            <Form.Label htmlFor='name'>Nome</Form.Label>
            <Form.Input name='name' placeholder='Médica' />
            <Form.ErrorMessage field='name' />
          </Form.Field>

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

          <Form.Field>
            <Form.Label htmlFor='confirmPassword'>Confirmar senha</Form.Label>
            <Form.Input type='password' name='confirmPassword' placeholder='******' />
            <Form.ErrorMessage field='confirmPassword' />
          </Form.Field>

          <Button type='submit' disabled={isSubmitting}>Cadastrar</Button>
        </Form.Root>
      </FormProvider>

      <RouteLink href="/login">Já tem uma conta?</RouteLink>
    </Container>
  )
}
