'use client'

import { FormHTMLAttributes, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

import styles from './styles.module.css'

interface RootProps extends FormHTMLAttributes<HTMLFormElement> {
  openDialog?: () => void,
}

export function Root({ openDialog, ...props }: RootProps) {
  const { formState: { isSubmitSuccessful }, reset } = useFormContext()

  // Open dialog only if there are no errors in form submition
  useEffect(() => {
    if (isSubmitSuccessful && openDialog) {
      openDialog()

      // We have the option to reset the form after a success submition
      reset({}, { keepValues: true })
    }
  }, [isSubmitSuccessful, openDialog, reset])

  return (
    <form
      {...props}
      className={styles.form}
    />
  )
}
