import { HTMLAttributes, ReactNode } from 'react'

import styles from './styles.module.css'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Container({ children, ...props }: ContainerProps) {
  return (
    <main {...props} className={styles.pageWrapper + ' ' + props.className}>
      {children}
    </main>
  )
}
