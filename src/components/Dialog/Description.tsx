import { ReactNode } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import styles from './styles.module.css'

interface DescriptionProps {
  children: ReactNode
}

export function Description({ children }: DescriptionProps) {
  return (
    <DialogPrimitive.Description className={styles.description}>
      {children}
    </DialogPrimitive.Description>
  )
}
