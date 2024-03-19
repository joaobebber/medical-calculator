import { forwardRef } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import styles from './styles.module.css'

interface DescriptionProps extends DialogPrimitive.DialogDescriptionProps {}

export const Description = forwardRef<HTMLParagraphElement, DescriptionProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DialogPrimitive.Description
        {...props}
        ref={forwardedRef}
        className={styles.description}
      >
        {children}
      </DialogPrimitive.Description>
    )
  }
)
