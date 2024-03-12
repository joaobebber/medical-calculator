import { HTMLAttributes, forwardRef } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import styles from './styles.module.css'

interface ContentProps extends HTMLAttributes<HTMLDivElement> {}

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={styles.overlay} />

        <DialogPrimitive.Content
          {...props}
          ref={forwardedRef}
          className={styles.content}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    )
  }
)
