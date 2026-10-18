import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Extend Vite's host allowlist only inside the Base44 preview sandbox.
// The preview proxy sends a Host of <port>-<sandbox id>.<BASE44_SANDBOX_HOST_DOMAIN>;
// the sandbox id rotates, so we allow the whole domain suffix when the flag is set.
const previewMode = process.env.BASE44_PREVIEW_MODE === '1'
const sandboxDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN
const allowedHosts =
  previewMode && sandboxDomain ? [`.${sandboxDomain}`] : undefined

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts,
    watch: {
      usePolling: true
    }
  }
})
