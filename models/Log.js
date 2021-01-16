const mongoose = require('mongoose')

const LogSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  completed: {
    type: String,
    default: 'Not Completed',
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('log', LogSchema)
