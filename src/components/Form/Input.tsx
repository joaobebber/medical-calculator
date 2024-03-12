import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import styles from './styles.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  number: boolean,
  unit: string
}

export function Input({ name, number, unit, ...props}: InputProps) {
  const { register } = useFormContext()

  return (
    <div className={styles.inputWrapper}>
      <input 
        id={name}
        {...(number && { type: 'text', inputMode: 'numeric' })}
        {...register(name)} 
        {...props}
      />
      <span>{unit}</span>
    </div>
  )
}
