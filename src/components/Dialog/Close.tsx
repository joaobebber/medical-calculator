import { forwardRef } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

interface CloseProps extends DialogPrimitive.DialogCloseProps {}

export const Close = forwardRef<HTMLButtonElement, CloseProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DialogPrimitive.Close
        {...props}
        ref={forwardedRef}
        asChild
      >
        {children}
      </DialogPrimitive.Close>
    )
  }
)
