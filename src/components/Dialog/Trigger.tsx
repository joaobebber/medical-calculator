import { ButtonHTMLAttributes, forwardRef } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

interface TriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DialogPrimitive.Trigger
        {...props}
        ref={forwardedRef}
        asChild
      >
        {children}
      </DialogPrimitive.Trigger>
    )
  }
)
