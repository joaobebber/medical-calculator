import { AppError } from '@/interfaces/AppError'

export function isAppError(data: any): data is AppError {
  if (data) {
    return 'error' in data
  }

  return false
}
