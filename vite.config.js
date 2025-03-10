// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';

export default defineConfig({
  base: "./", // Use relative paths to avoid MIME type issues
  build: {
    outDir: "dist", // Ensure correct output folder
  },
});