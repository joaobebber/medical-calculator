import { ReactNode } from 'react'

import styles from './styles.module.css'

interface TitleProps {
  children: ReactNode
}

export function Title({ children }: TitleProps) {
  return (
    <h1 className={styles.title}>
      {children}
    </h1>
  )
}
