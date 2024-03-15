import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

export const registerSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  email: z.string().min(1, 'O email é obrigatório').email('Formato de email inválido').toLowerCase(),
  password: z.string().min(1, 'A senha é obrigatória').min(6, 'A senha precisa de no mínimo 6 caracteeres'),
  confirmPassword: z.string(),
}).superRefine(
  ({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
      })
    }
  }
)

export type RegisterData = z.infer<typeof registerSchema>

export const resolver = zodResolver(registerSchema)
