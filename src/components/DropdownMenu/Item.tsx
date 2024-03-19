import { forwardRef } from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import styles from './styles.module.css'

interface ItemProps extends DropdownMenuPrimitive.DropdownMenuItemProps {}

export const Item = forwardRef<HTMLDivElement, ItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.Item
        {...props}
        ref={forwardedRef}
        className={styles.item + ' ' + props.className}
      >
        {children}
      </DropdownMenuPrimitive.Item>
    )
  }
)
