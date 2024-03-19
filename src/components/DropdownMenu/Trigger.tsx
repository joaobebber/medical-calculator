import { forwardRef } from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

interface TriggerProps extends DropdownMenuPrimitive.DropdownMenuTriggerProps {}

export const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.Trigger
        {...props}
        ref={forwardedRef}
        asChild
      >
        {children}
      </DropdownMenuPrimitive.Trigger>
    )
  }
)
