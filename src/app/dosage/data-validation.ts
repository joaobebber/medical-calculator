import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { commaDecimalNumber } from '@/validations/commaDecimalNumber'

const dosageCalcSchema = z.object({
  posologia: commaDecimalNumber({
    is_nan_error: 'A posologia precisa ser um número',
    required_error: 'A posologia é obrigatória',
  }).transform((arg) => Number(arg)),
  dosesDiarias: commaDecimalNumber({
    is_nan_error: 'As doses diárias precisam ser um número',
    required_error: 'As doses diárias são obrigatórias',
  }).transform((arg) => Number(arg)),
  peso: commaDecimalNumber({
    is_nan_error: 'O peso precisa ser um número',
    required_error: 'O peso é obrigatório',
  }).transform((arg) => Number(arg)),
  concentracao: commaDecimalNumber({
    is_nan_error: 'A concentração precisa ser um número',
    required_error: 'A concentração é obrigatória',
  }).transform((arg) => Number(arg)),
  diluicao: commaDecimalNumber({
    is_nan_error: 'A diluição precisa ser um número',
    required_error: 'A diluição é obrigatória',
  }).transform((arg) => Number(arg)),
})

export type DosageCalcData = z.infer<typeof dosageCalcSchema>

export const resolver = zodResolver(dosageCalcSchema)
