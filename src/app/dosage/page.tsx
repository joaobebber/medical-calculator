'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Dialog } from '@/components/Dialog'
import { Form } from '@/components/Form'
import { Title } from '@/components/Title'
import { handleDosageCalc } from '@/utils/handleDosageCalc'

import { DosageCalcData, resolver } from './data-validation'
import styles from './page.module.css'

export default function Dosage() {
  const [dosage, setDosage] = useState<number>()
  const [period, setPeriod] = useState<number>()

  const dosageCalcForm = useForm<DosageCalcData>({ resolver })

  const { handleSubmit, formState: { isSubmitting } } = dosageCalcForm

  function dosageCalc(data: DosageCalcData) {
    const { dosage, period } = handleDosageCalc(data)

    setDosage(dosage)
    setPeriod(period)
  }

  return (
    <Container>
      <Title text="Dosagem" />

      <FormProvider {...dosageCalcForm}>
        <form onSubmit={handleSubmit(dosageCalc)} className={styles.form} autoComplete='off'>
          <Form.Field>
            <Form.Label htmlFor='posologia'>Posologia</Form.Label>
            <Form.Input number name='posologia' placeholder='70' unit="mg/kg.dia" />
            <Form.ErrorMessage field='posologia' />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor='dosesDiarias'>Doses Diárias</Form.Label>
            <Form.Input number name='dosesDiarias' placeholder='3' unit="doses/dia" />
            <Form.ErrorMessage field='dosesDiarias' />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor='peso'>Peso</Form.Label>
            <Form.Input number name='peso' placeholder='10' unit="kg" />
            <Form.ErrorMessage field='peso' />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor='concentracao'>Concentração</Form.Label>
            <Form.Input number name='concentracao' placeholder='1000' unit="mg/ampola" />
            <Form.ErrorMessage field='concentracao' />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor='diluicao'>Diluição</Form.Label>
            <Form.Input number name='diluicao' placeholder='4' unit="ml" />
            <Form.ErrorMessage field='diluicao' />
          </Form.Field>

          <Dialog.Root>
            <Dialog.Trigger>
              <Button type='submit' disabled={isSubmitting}>Calcular</Button>
            </Dialog.Trigger>

            <Dialog.Content>
              <Dialog.Title>Aplicação</Dialog.Title>
              <Dialog.Description>{dosage} ml a cada {period} horas</Dialog.Description>
              <Dialog.Close>
                <Button type='button'>OK</Button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Root>
        </form>
      </FormProvider>

      <Link href="/" className={styles.backButton}>
        <Button variant="Outline">Voltar</Button>
      </Link>
    </Container>
  )
}
