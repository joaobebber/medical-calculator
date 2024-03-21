import { useState, useContext, ReactNode } from 'react'
import { FormProvider, useForm, Resolver, FieldValues } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/components/Button'
import { Dialog } from '@/components/Dialog'
import { Form } from '@/components/Form'
import { AuthContext } from '@/contexts/AuthContext'
import { AppError } from '@/interfaces/AppError'

import styles from './styles.module.css'

interface UpdateFormProps {
  triggerText: string
  resolver: Resolver<any>
  action: (arg: any) => Promise<AppError | void>
  successMessage: string
  children: ReactNode
}

export function UpdateForm<FormData extends FieldValues>({ triggerText, resolver, action, successMessage, children }: UpdateFormProps) {
  const [open, setOpen] = useState(false)

  const { refreshUser } = useContext(AuthContext)

  const form = useForm<FormData>({ resolver })

  const { handleSubmit, formState: { isSubmitting } } = form

  async function handleUpdate(data: FormData) {
    const result = await action(data)

    if (result?.error) toast.error(result.error)
    else toast.success(successMessage)

    await refreshUser()

    setOpen(false)
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button variant='Outline' className={styles.actionButton}>{triggerText}</Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>{triggerText}</Dialog.Title>

        <FormProvider {...form}>
          <Form.Root onSubmit={handleSubmit(handleUpdate)}>
            {children}

            <Button type='submit' disabled={isSubmitting}>Enviar</Button>
          </Form.Root>
        </FormProvider>

      </Dialog.Content>
    </Dialog.Root>
  )
}
