import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

export const registerSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  email: z.string()
    .min(1, 'O email é obrigatório')
    .email('Formato de email inválido')
    .toLowerCase(),
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

export type RegisterData = z.infer<typeof registerSchema>

export const resolver = zodResolver(registerSchema)
