const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const path = require('path')

// App configuration
const app = express()
const connection_url =
  'mongodb+srv://admin:iTAw1W5orjFaSCz7@cluster0.rkovu.mongodb.net/roommateloggerdb?retryWrites=true&w=majority'
// Connect DB
connectDB()

// Middleware
app.use(express.json({ extended: false }))

// Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/log', require('./routes/log'))
app.use('/api/tenant', require('./routes/tenant'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
}

const PORT = process.env.PORT || 5000

// Listener
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
