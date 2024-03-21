import Image from 'next/image'
import { FormEvent, InputHTMLAttributes, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Button } from '../Button'
import styles from './styles.module.css'

interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function ImageInput({ name, ...props }: ImageInputProps) {
  const hiddenInputRef = useRef<HTMLInputElement | null>(null)
  const [preview, setPreview] = useState<string>()
  const { register } = useFormContext()

  const { ref: registerRef, onChange: registerOnChange, ...rest } = register(name)

  const handleUploadedFile = async (event: FormEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files

    if (files) {
      const file = files[0]

      const urlImage = URL.createObjectURL(file)

      setPreview(urlImage)
    }

    return registerOnChange(event)
  }

  const handleUpload = () => hiddenInputRef.current?.click()

  const uploadButtonLabel = preview ? 'Alterar imagem' : 'Escolher imagem'

  return (
    <div className={styles.imageInputWrapper}>
      <input
        type='file'
        multiple={false}
        max={1}
        maxLength={1}
        accept='image/*'
        id={name}
        onChange={handleUploadedFile}
        ref={(e) => {
          registerRef(e)
          hiddenInputRef.current = e
        }}
        hidden
        {...rest}
        {...props}
      />

      {preview && (
        <Image
          width={80}
          height={80}
          src={preview}
          alt='Photo update preview'
          className={styles.imageInputPreview}
        />
      )}

      <Button
        type='button'
        variant='Outline'
        onClick={handleUpload}
      >
        {uploadButtonLabel}
      </Button>
    </div>
  )
}
