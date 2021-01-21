const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const User = require('../models/User')
const Log = require('../models/Log')
const Tenant = require('../models/Tenant')

// @route    GET api/tenant
// @desc     get tenants for logged in user
// @access   private
router.get('/', auth, async (req, res) => {
  try {
    const tenant = await Tenant.find({ user: req.user.id })
    res.json(tenant)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// @route    POST api/tenant
// @desc     post a new tenant for logged in user
// @access   public
router.post(
  '/',
  [
    auth,
    [
      check('firstName', 'please include first name').not().isEmpty(),
      check('lastName', 'please include a last name').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { firstName, lastName } = req.body
    try {
      const newTenant = new Tenant({
        firstName,
        lastName,
        user: req.user.id,
      })
      const tenant = await newTenant.save()
      res.json(tenant)
    } catch (error) {
      console.error(error.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route    DELETE api/tenant/:id
// @desc     delete tenant
// @access   public
router.delete('/:id', auth, async (req, res) => {
  try {
    const tenant = await Tenant.findById(req.params.id)
    if (!tenant) return res.status(404).json({ message: 'log not found' })
    // Logged in user can delete tenants
    if (tenant.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'not authorized' })
    }
    await Tenant.findByIdAndRemove(req.params.id)

    res.json({ message: 'Entry removed' })
  } catch (error) {}
})

module.exports = router
