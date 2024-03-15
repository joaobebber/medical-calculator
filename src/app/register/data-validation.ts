import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

export const registerSchema = z.object({
  name: z.string({ required_error: 'O nome é obrigatório' }),
  email: z.string({ required_error: 'O email é obrigatório' })
    .email('Formato de email inválido')
    .toLowerCase(),
  password: z.string({ required_error: 'A senha é obrigatória' })
    .min(6, 'A senha precisa de no mínimo 6 caracteeres'),
  confirmPassword: z.string({ required_error: 'A confirmação de senha é obrigatória' }),
}).superRefine(
  ({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'As senhas são diferentes',
      })
    }
  }
)

export type RegisterData = z.infer<typeof registerSchema>

export const resolver = zodResolver(registerSchema)
