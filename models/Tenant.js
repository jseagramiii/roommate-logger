const mongoose = require('mongoose')

const TenantSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('tenant', TenantSchema)
