export function getErrorMessage(error: unknown): string {
  let message: string

  // Se for um erro padrão do JavaScript
  if (error instanceof Error) {
    message = error.message
  }

  // Se for um objeto com uma propriedade mensagem
  else if (error && (typeof error === 'object') && ('message' in error)) {
    message = String(error.message)
  }

  // Se for somente uma mensagem
  else if (typeof error === 'string') {
    message = error
  }

  // Se não for nada (catch-all)
  else {
    message = 'Alguma coisa deu errado! :('
  }

  return message
}
