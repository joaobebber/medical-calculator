import type { Metadata } from 'next'

import { poppins } from './fonts'
import styles from './styles.module.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Medical Calculator',
  description: 'Seu melhor amigo na rotina de atendimento ❤️‍🩹',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header className={styles.header}>
          <h1>Pediatria</h1>
        </header>

        {children}
      </body>
    </html>
  )
}
