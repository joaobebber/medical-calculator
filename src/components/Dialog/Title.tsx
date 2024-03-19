import { forwardRef } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import styles from './styles.module.css'

interface TitleProps extends DialogPrimitive.DialogTitleProps {}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DialogPrimitive.Title
        {...props}
        ref={forwardedRef}
        className={styles.title}
      >
        {children}
      </DialogPrimitive.Title>
    )
  }
)
