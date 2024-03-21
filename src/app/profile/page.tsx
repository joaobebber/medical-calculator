'use client'

import Image from 'next/image'
import { useContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { UserCircle } from '@phosphor-icons/react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Dialog } from '@/components/Dialog'
import { Form } from '@/components/Form'
import { AuthContext } from '@/contexts/AuthContext'
import { updateAvatar } from '@/http/updateAvatar'
import { updateEmail } from '@/http/updateEmail'
import { updatePassword } from '@/http/updatePassword'

import {
  UpdateAvatarData, updateAvatarResolver,
  UpdateEmailData, updateEmailResolver,
  UpdatePasswordData, updatePasswordResolver,
} from './data-validation'
import styles from './page.module.css'
import { UpdateForm } from './UpdateForm'

export default function Profile() {
  const [openUpdateAvatar, setOpenUpdateAvatar] = useState(false)
  const { user, refreshUser } = useContext(AuthContext)

  const updateAvatarForm = useForm<UpdateAvatarData>({ resolver: updateAvatarResolver })

  const { handleSubmit, formState: { isSubmitting } } = updateAvatarForm

  async function handleUpdateAvatar({ avatar }: UpdateAvatarData) {
    const formData  = new FormData()

    formData.append('avatar', avatar)

    const result = await updateAvatar({ formData })

    if (result?.error) toast.error(result.error)
    else toast.success('Foto atualizada com sucesso! 📸')

    await refreshUser()

    setOpenUpdateAvatar(false)
  }

  return (
    <Container>
      {user?.avatar ? (
        <Image
          width={120}
          height={120}
          src={user.avatar}
          alt='User avatar'
          className={styles.avatar}
          priority
        />
      ) : (
        <UserCircle size={120} weight="thin" className={styles.avatar} />
      )}

      <h2 className={styles.name}>{user?.name}</h2>

      <div className={styles.inputWrapper}>
        <span>Email</span>
        <input
          type="text"
          placeholder={user?.email}
          className={styles.inputDisabled}
          disabled
        />
      </div>

      <Dialog.Root open={openUpdateAvatar} onOpenChange={setOpenUpdateAvatar}>
        <Dialog.Trigger>
          <Button variant='Outline' className={styles.actionButton}>Alterar foto</Button>
        </Dialog.Trigger>

        <Dialog.Content>
          <Dialog.Title>Alterar foto</Dialog.Title>

          <FormProvider {...updateAvatarForm}>
            <Form.Root onSubmit={handleSubmit(handleUpdateAvatar)}>
              <Form.Field>
                <Form.ImageInput name='avatar' />
                <Form.ErrorMessage field='avatar' />
              </Form.Field>

              <Button type='submit' disabled={isSubmitting}>Enviar</Button>
            </Form.Root>
          </FormProvider>
        </Dialog.Content>
      </Dialog.Root>

      <UpdateForm<UpdateEmailData>
        triggerText='Alterar email'
        resolver={updateEmailResolver}
        action={updateEmail}
        successMessage='Email atualizado com sucesso! 📬'
      >
        <Form.Field>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Input name='email' placeholder='email@exemplo.com' />
          <Form.ErrorMessage field='email' />
        </Form.Field>
      </UpdateForm>

      <UpdateForm<UpdatePasswordData>
        triggerText='Alterar senha'
        resolver={updatePasswordResolver}
        action={updatePassword}
        successMessage='Senha atualizada com sucesso! 🔑'
      >
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
      </UpdateForm>
    </Container>
  )
}
