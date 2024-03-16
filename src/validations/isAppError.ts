import { AppError } from '@/interfaces/AppError'

export function isAppError(data: any): data is AppError {
  return 'error' in data
}
