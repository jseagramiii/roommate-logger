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
  category: {
    type: String,
    default: 'general',
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('log', LogSchema)
