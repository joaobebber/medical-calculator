import { forwardRef } from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

interface ItemProps extends DropdownMenuPrimitive.DropdownMenuItemProps {}

export const Item = forwardRef<HTMLDivElement, ItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.Item
        {...props}
        ref={forwardedRef}
        asChild
      >
        {children}
      </DropdownMenuPrimitive.Item>
    )
  }
)
