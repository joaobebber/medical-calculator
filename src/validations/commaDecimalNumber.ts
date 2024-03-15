import { z } from 'zod'

interface ErrorMessages {
  is_nan_error?: string
  required_error?: string
}

export function commaDecimalNumber({ is_nan_error, required_error }: ErrorMessages) {
  return z.string({ required_error })
    .transform(data => data.replace(',', '.'))
    .refine(data => !isNaN(parseFloat(data)), is_nan_error)
}
