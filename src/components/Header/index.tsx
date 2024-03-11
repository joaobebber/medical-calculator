import styles from './styles.module.css'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  )
}
