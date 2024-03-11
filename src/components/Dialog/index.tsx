'use client';

import * as D from '@radix-ui/react-dialog';

import { Button } from '../Button';

import styles from './styles.module.css'

interface DialogProps {
  title: string
  description: string
  children: React.ReactNode
}

export function Dialog({ title, description, children }: DialogProps) {
  return (
    <D.Root>
      <D.Trigger asChild>
        {children}
      </D.Trigger>

      <D.Portal>
        <D.Overlay className={styles.overlay} />

        <D.Content className={styles.content}>
          <D.Title className={styles.title}>{title}</D.Title>

          <D.Description className={styles.description}>{description}</D.Description>

          <D.Close asChild>
            <Button>OK</Button>
          </D.Close>
        </D.Content>
      </D.Portal>
    </D.Root>
  )
}
