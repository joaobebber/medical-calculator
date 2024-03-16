import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

export const loginSchema = z.object({
  email: z.string()
    .min(1, 'O email é obrigatório')
    .email('Formato de email inválido')
    .toLowerCase(),
  password: z.string()
    .min(1, 'A senha é obrigatória')
    .min(6, 'A senha precisa de no mínimo 6 caracteres'),
})

export type LoginData = z.infer<typeof loginSchema>

export const resolver = zodResolver(loginSchema)
