export function toCamelCase(text: string): string {
  // Substitute all chars with accent to non-special chars
  const textWithoutAccent = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

  // Make text match camelCase format
  const formattedText = textWithoutAccent.replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    (letter, index) => {
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase()
    }
  )
  
  // Remove all spaces
  const formattedTextWithoutSpaces = formattedText.replace(/\s+/g, '');

  return formattedTextWithoutSpaces
}
