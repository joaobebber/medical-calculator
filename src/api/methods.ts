'use server'

import { cookies } from 'next/headers'

import { APIError } from '@/errors/APIError'

const baseURL = process.env.BASE_API_URL

export async function get<T = unknown>(path: string): Promise<T> {
  const response: Response = await fetch(baseURL + path, {
    method: 'GET',
    cache: 'no-store',
    headers: {
      'Authorization': `Bearer ${cookies().get('@medcalc.token')?.value}`,
    },
  })

  if (!response.ok) throw new APIError(await response.json())

  const data = await response.json() as T

  return data
}

export async function post<T = unknown>(path: string, body: unknown): Promise<T> {
  const response: Response = await fetch(baseURL + path, {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookies().get('@medcalc.token')?.value}`,
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) throw new APIError(await response.json())

  const data = await response.json() as T

  return data
}
