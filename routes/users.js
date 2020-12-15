const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')

const User = require('../models/User')

// @route   POST api/users
// @desc     Register a user
// @access   public
router.post(
  '/',
  [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'Please enter a valid email address').isEmail(),
    check(
      'password',
      'Please enter a password with at least 6 characters'
    ).isLength({ min: 6 }),
  ],

  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body
    // If a new user tries to use an email address already in database, send back json message
    try {
      let user = await User.findOne({ email: email })
      if (user) {
        return res
          .status(400)
          .json({ message: 'User with this email already exists' })
      }
      // Could use ES6 object key value pair syntactic sugar, but keeping it like this is more explicit
      user = new User({
        name: name,
        email: email,
        password: password,
      })

      const salt = await bcrypt.genSalt(10)

      user.password = await bcrypt.hash(password, salt)

      await user.save()

      const payload = {
        user: {
          id: user.id,
        },
      }

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 36000,
        },
        (error, token) => {
          if (error) throw error
          res.json({ token })
        }
      )
    } catch (error) {
      console.error(error.message)
      res.status(500).send('server error')
    }
  }
)

module.exports = router
