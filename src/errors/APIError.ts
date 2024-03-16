interface APIErrorProps {
  message: string
  issues?: string[]
}

export class APIError {
  public readonly message: string

  public readonly issues?: string[]

  constructor({ message, issues }: APIErrorProps) {
    this.message = message
    this.issues = issues
  }
}
