import { realpathSync } from 'node:fs'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const vitePkg = require.resolve('vite/package.json')

console.log('vite package:', vitePkg)
console.log('vite realpath:', realpathSync(vitePkg))

try {
  const rolldown = await import('vite/rolldown')
  console.log('rolldown loaded:', typeof rolldown.rolldown)
} catch (error) {
  console.error(error)
  process.exitCode = 1
}
