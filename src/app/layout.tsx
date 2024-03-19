import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import { Header } from '@/components/Header'
import { AuthProvider } from '@/contexts/AuthContext'

import { poppins } from './fonts'
import styles from './styles.module.css'

import './globals.css'

export const metadata: Metadata = {
  title: process.env.APP_TITLE,
  description: process.env.APP_DESCRIPTION,
}

interface LayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={poppins.className + ' ' + styles.body}>
          <Header />

          {children}

          <Toaster position='bottom-right' />
        </body>
      </AuthProvider>
    </html>
  )
}
