import { toCamelCase } from '@/utils/toCamelCase'

import styles from './styles.module.css'

interface InputProps {
  title: string
  placeholder: string
  unit: string
}

export function Input({ title, placeholder, unit }: InputProps) {
  const name = toCamelCase(title);

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{title}</label>
  
      <div className={styles.inputWrapper}>
        <input
          type="number"
          id={name}
          name={name}
          placeholder={placeholder}
        />
        <span>{unit}</span>
      </div>
    </div>
  )
}
