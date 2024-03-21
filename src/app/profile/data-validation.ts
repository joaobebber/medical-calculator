import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

// Update Photo
const MAX_FILE_SIZE = 1024 * 1024 * 5  // 5 MB
const ACCEPTED_IMAGE_MIME_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

const updateAvatarSchema = z.object({
  avatar: z.any()
    .transform(
      (files) => files[0] as File
    )
    .refine(
      (file) => ACCEPTED_IMAGE_MIME_TYPES.includes(file.type),
      'Somente os formatos .jpg, .jpeg, .png and .webp são suportados'
    )
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      'O tamanho máximo da imagem é 5MB'
    ),
})

export type UpdateAvatarData = z.infer<typeof updateAvatarSchema>

export const updateAvatarResolver = zodResolver(updateAvatarSchema)

// Update Email
const updateEmailSchema = z.object({
  email: z.string()
    .min(1, 'O email é obrigatório')
    .email('Formato de email inválido')
    .toLowerCase(),
})

export type UpdateEmailData = z.infer<typeof updateEmailSchema>

export const updateEmailResolver = zodResolver(updateEmailSchema)

// Update Password
const updatePasswordSchema = z.object({
  password: z.string()
    .min(1, 'A senha é obrigatória')
    .min(6, 'A senha precisa de no mínimo 6 caracteres'),
  confirmPassword: z.string().min(1, 'A confirmação de senha é obrigatória'),
}).refine(
  ({ confirmPassword, password }) => {
    if (confirmPassword === password) return true
    return false
  }, {
    message: 'As senhas são diferentes',
    path: ['confirmPassword'],
  }
)

export type UpdatePasswordData = z.infer<typeof updatePasswordSchema>

export const updatePasswordResolver = zodResolver(updatePasswordSchema)
