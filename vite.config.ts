import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: "www",
    sourcemap: false,
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
  optimizeDeps: {
    include: ['linked-dep'],
  },
})
