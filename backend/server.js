import express from 'express'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'portfolio-backend',
    timestamp: new Date().toISOString(),
  })
})

app.get('/api/message', (_req, res) => {
  res.json({
    message: 'Backend connected successfully.',
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
