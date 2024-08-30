import { defineEventHandler } from "#imports"
const baseUrl = 'https://api.politie.nl/v4/nieuws'

export default defineEventHandler(async (event) => {
  const request = `${baseUrl}?${event.path.split('?')[1]}`
  return await $fetch(request).catch((error) => {
    return new Error(error)
  })
})