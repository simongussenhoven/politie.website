import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cleanHtml(html: string) {
  return removeEmptyParagraphs(html)
}

export function removeEmptyParagraphs(html: string) {
  return html.replace(/<p><\/p>/gm, '')
}