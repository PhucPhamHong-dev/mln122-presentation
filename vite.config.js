import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { presentationKnowledge } from './src/data/presentationKnowledge.js'
import { handleChatRequest } from './src/lib/chatService.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const devApiKey = env.DEEPSEEK_API_KEY || env.VITE_DEEPSEEK_API_KEY || process.env.DEEPSEEK_API_KEY

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'local-chat-api',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url !== '/api/chat' || req.method !== 'POST') {
              next()
              return
            }

            await handleChatRequest(req, res, presentationKnowledge, devApiKey)
          })
        },
      },
    ],
  }
})
