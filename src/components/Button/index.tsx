import React from 'react'

import styles from './styles.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'Default' | 'Outline'
}

// eslint-disable-next-line react/display-name
const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'Default', children, ...props }, ref) => {
    const variantStyle = variant === 'Outline' ? styles.outlineButton : styles.defaultButton

    return (
      <button {...props} ref={ref} className={styles.button + ' ' + variantStyle}>
        {children}
      </button>
    )
  }
);

export { Button };
