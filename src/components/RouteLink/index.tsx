import Link from 'next/link'
import { ReactNode } from 'react'

import styles from './styles.module.css'

interface RouteLinkProps {
  href: string
  children: ReactNode
}

export function RouteLink({ href, children }: RouteLinkProps) {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  )
}
