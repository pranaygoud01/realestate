import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: true,       // allows access from other devices on the network (0.0.0.0)
    port: 5173,       // change this to your preferred port (e.g., 3000, 8080, etc.)
    open: true,       // automatically open browser (optional)
  },
})
