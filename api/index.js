import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import serverless from 'serverless-http'

import connectDB from '../server/configs/mongodb.js'
import { clerkWebhooks } from '../server/controllers/webhooks.js'

const app = express()

let server

const setupServer = async () => {
  await connectDB()
  app.use(cors())
  app.use(express.json())

  app.get('/', (req, res) => res.send('API Working'))
  app.post('/clerk', clerkWebhooks)

  server = serverless(app)
}

await setupServer()

export default function handler(req, res) {
  return server(req, res)
}
