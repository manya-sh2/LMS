import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import serverless from 'serverless-http'

import connectDB from '../server/configs/mogodb.js'
import { clerkWebhooks } from '../server/controllers/webhooks.js'

const app = express()

await connectDB()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('API Working'))
app.post('/clerk', clerkWebhooks)

export const handler = serverless(app)
