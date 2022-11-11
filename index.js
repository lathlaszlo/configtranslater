import { translate } from '@vitalets/google-translate-api'
import { readFile } from 'fs/promises'

const file = await readFile("./input", { encoding: "utf-8" })

file.split("\n")
.forEach(__line => {
  const line = __line.trim()

  console.log(line)
})