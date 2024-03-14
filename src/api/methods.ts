'use server'

import { cookies } from 'next/headers'

const baseURL = process.env.BASE_API_URL

export async function get<T = unknown>(path: string): Promise<T> {
  const response = await fetch(baseURL + path, {
    method: 'GET',
    cache: 'no-store',
    headers: {
      'Authorization': `Bearer ${cookies().get('@medcalc.token')?.value}`,
    }
  })

  const data = await response.json() as T

  return data
}

export async function post<T = unknown>(path: string, body: unknown): Promise<T> {
  const response = await fetch(baseURL + path, {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookies().get('@medcalc.token')?.value}`,
    },
    body: JSON.stringify(body),
  })

  const data = await response.json() as T

  return data
}
