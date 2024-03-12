import * as DialogPrimitive from '@radix-ui/react-dialog'

import styles from './styles.module.css'

interface TitleProps {
  children: React.ReactNode
}

export function Title({ children }: TitleProps) {
  return (
    <DialogPrimitive.Title className={styles.title}>
      {children}
    </DialogPrimitive.Title>
  )
}
