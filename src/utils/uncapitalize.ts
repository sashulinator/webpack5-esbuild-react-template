export default function uncapitalize(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1)
}
