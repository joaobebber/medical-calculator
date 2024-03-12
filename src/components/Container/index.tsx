import styles from './styles.module.css'

interface ContainerProps {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <main className={styles.pageWrapper}>
      {children}
    </main>
  )
}
