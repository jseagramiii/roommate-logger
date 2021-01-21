const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/db')

// App configuration
const app = express()
const PORT = process.env.PORT || 5000
const connection_url =
  'mongodb+srv://admin:iTAw1W5orjFaSCz7@cluster0.rkovu.mongodb.net/roommateloggerdb?retryWrites=true&w=majority'

// Middleware
app.use(express.json({ extended: false }))
// Connect DB
connectDB()

// API enpoints
app.get('/', (req, res) => res.status(200).json({ message: 'welcome' }))

// Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/log', require('./routes/log'))
app.use('/api/tenant', require('./routes/tenant'))

// Listener
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
