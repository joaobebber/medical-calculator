import { DosageCalcData } from '@/app/dosage/data-validation'

export function handleDosageCalc({ concentracao, diluicao, dosesDiarias, peso, posologia }: DosageCalcData) {
  const mgPerDose = peso * posologia / dosesDiarias

  const mlPerDose = mgPerDose * diluicao / concentracao

  const doseGap = 24 / dosesDiarias

  const roundedDosage = Math.round(mlPerDose * 100) / 100

  return {
    dosage: roundedDosage,
    period: doseGap,
  }
}
