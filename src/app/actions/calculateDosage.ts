'use server';

import { z } from 'zod';

const calculateDosageSchema = z.object({
  concentracao: z.coerce.number(),
  diluicao: z.coerce.number(),
  dosesAoDia: z.coerce.number(),
  peso: z.coerce.number(),
  posologia: z.coerce.number(),
})

export async function calculateDosage(prevState: any, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());

  const validatedFields = calculateDosageSchema.safeParse(rawFormData)

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { concentracao, diluicao, dosesAoDia, peso, posologia } = validatedFields.data

  const mgPerDose = peso * posologia / dosesAoDia

  const mlPerDose = mgPerDose * diluicao / concentracao

  const doseGap = 24 / dosesAoDia

  const roundedDosage = Math.round(mlPerDose * 100) / 100

  return {
    dosage: roundedDosage,
    period: doseGap
  }
}
