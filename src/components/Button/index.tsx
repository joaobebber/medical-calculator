import { ButtonHTMLAttributes, forwardRef } from 'react'

import styles from './styles.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'Default' | 'Outline'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, forwardedRef) => {
    const variantStyle = props.variant === 'Outline' ? styles.outline : styles.default

    return (
      <button
        {...props}
        ref={forwardedRef}
        className={styles.button + ' ' + variantStyle}
      >
        {children}
      </button>
    )
  }
)
