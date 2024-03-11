import Link from "next/link";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";

import styles from "./page.module.css";

export default function Home() {
  return (
    <Container>
      <Header title="Pediatria" />

      <Title text="Escolha a categoria" />

      <Link href="/dosage">
        <Button>Dosagem</Button>
      </Link>
    </Container>
  )
}
