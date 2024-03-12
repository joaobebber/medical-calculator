import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

export const dosageCalcSchema = z.object({
  posologia: z.coerce.number().min(1, 'A posologia é obrigatória'),
  dosesDiarias: z.coerce.number().min(1, 'As doses diárias são obrigatórias'),
  peso: z.coerce.number().min(1, 'O peso é obrigatório'),
  concentracao: z.coerce.number().min(1, 'A concentração é obrigatória'),
  diluicao: z.coerce.number().min(1, 'A diluição é obrigatória'),
})

export type DosageCalcData = z.infer<typeof dosageCalcSchema>

export const resolver = zodResolver(dosageCalcSchema)
