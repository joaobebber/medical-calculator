import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import styles from './styles.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  unit: string
}

export function Input({ name, unit, ...props}: InputProps) {
  const { register } = useFormContext()

  return (
    <div className={styles.inputWrapper}>
      <input 
        id={name}
        {...register(name)} 
        {...props}
      />
      <span>{unit}</span>
    </div>
  )
}
