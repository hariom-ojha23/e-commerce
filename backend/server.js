import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
const app = express()
connectDB()

// routes

app.get('/', (req, res) => {
  res.send('Api is running ...')
})

app.use('/api/products', productRoutes)

// error handlers

app.use(notFound)
app.use(errorHandler)

// listening port

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
})
