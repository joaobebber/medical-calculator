'use client'

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

import { calculateDosage } from "@/app/actions";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Dialog } from "@/components/Dialog";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Title } from "@/components/Title";

import styles from "./page.module.css";
import Link from "next/link";

const initialState = {
  dosage: 0,
  period: 0,
  errors: '' as any,
}

export default function Dosage() {
  const [dosage, setDosage] = useState<number>()
  const [period, setPeriod] = useState<number>()
  
  const [state, formAction] = useFormState(calculateDosage, initialState)

  useEffect(() =>{
    setDosage(state.dosage)
    setPeriod(state.period)
  }, [state.dosage, state.period])

  return (
    <Container>
      <Header title="Pediatria" />

      <Title text="Dosagem" />

      <form action={formAction} className={styles.form} autoComplete="off">
        <Input title="Posologia" placeholder="70" unit="mg/kg.dia" />
        <Input title="Doses ao dia" placeholder="3" unit="doses/dia" />
        <Input title="Peso" placeholder="10" unit="kg" />
        <Input title="Concentração" placeholder="1000" unit="mg/ampola" />
        <Input title="Diluição" placeholder="4" unit="ml" />

        <Dialog
          title="Aplicação"
          description={`${dosage} ml a cada ${period} horas`}
        >
          <Button type="submit">Calcular</Button>
        </Dialog>

        {/* ERROR HANDLING */}
        {state.errors && <p>Erros: {JSON.stringify(state.errors)}</p>}
      </form>

      <Link href="/">
        <Button variant="Outline" style={{ marginTop: '8px' }}>
          Voltar
        </Button>
      </Link>
    </Container>
  );
}
