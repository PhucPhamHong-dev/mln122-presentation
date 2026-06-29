import { presentationKnowledge } from '../src/data/presentationKnowledge.js'
import { handleChatRequest } from '../src/lib/chatService.js'

export default async function handler(req, res) {
  return handleChatRequest(req, res, presentationKnowledge, process.env.DEEPSEEK_API_KEY)
}

