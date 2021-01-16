const mongoose = require('mongoose')

const TenantSchema = mongoose.Schema({
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
