import { getAPIClient } from './axios'

// Chamada que faremos pro backend a partir do browser (sem contexto)
export const api = getAPIClient()
