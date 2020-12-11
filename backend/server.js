const express = require('express')
const mongoose = require('mongoose')

// App configuration
const app = express()
const PORT = process.env.PORT || 5000
const connection_url = `mongodb+srv://admin:iTAw1W5orjFaSCz7@cluster0.rkovu.mongodb.net/roommateloggerdb?retryWrites=true&w=majority`

// Middleware

// DB configuration
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

// API enpoints
app.get('/', (req, res) => res.status(200).json({ message: 'welcome' }))

// Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/log', require('./routes/log'))

// Listener
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
