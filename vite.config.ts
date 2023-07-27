import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
      alias: [
      {
        find: './runtimeConfig',
        replacement: './runtimeConfig.browser',
      },
    ]
  },
  //Add build if you are going to use a Git-based (Github or CodeCommit) deployement
  build: {
    outDir: "build",
  }
})
