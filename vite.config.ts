import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // './' faz o site funcionar tanto em usuario.github.io/nome-do-repo/ quanto em um domínio próprio.
  base: './',
  plugins: [react()],
})
