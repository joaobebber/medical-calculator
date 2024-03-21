'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'

import { List, SignOut, SquaresFour, User } from '@phosphor-icons/react'

import { AuthContext } from '@/contexts/AuthContext'

import { DropdownMenu } from '../DropdownMenu'
import styles from './styles.module.css'

export function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const { signOut } = useContext(AuthContext)
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

            <DropdownMenu.Content>
              <DropdownMenu.Item>
                <Link href="/">
                  <SquaresFour size={16} weight="bold" />Categorias
                </Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item>
                <Link href="/profile">
                  <User size={16} weight="bold" />Perfil
                </Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item>
                <button onClick={signOut} className={styles.exitLink}>
                  <SignOut size={16} weight="bold" />Sair
                </button>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      )}
    </header>
  )
}
