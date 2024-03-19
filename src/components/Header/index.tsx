'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { List, SignOut, SquaresFour, User } from '@phosphor-icons/react'

import { DropdownMenu } from '../DropdownMenu'
import styles from './styles.module.css'

export function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const path = usePathname()

  useEffect(() => {
    const publicPaths = ['/login', '/register']

    if (publicPaths.includes(path)) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }, [path])

  return (
    <header className={styles.header}>
      <h1>Pediatria</h1>

      {showMenu && (
        <div className={styles.menuWrapper}>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <button className={styles.menuTrigger}>
                <List size={32} weight="bold" />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content className={styles.menuContent}>
              <DropdownMenu.Item>
                <Link href="/">
                  <SquaresFour size={16} weight="bold" />Categorias
                </Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item>
                <Link href="#">
                  <User size={16} weight="bold" />Perfil
                </Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item>
                <Link href="#" className={styles.exitLink}>
                  <SignOut size={16} weight="bold" />Sair
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      )}
    </header>
  )
}
