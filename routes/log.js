const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const User = require('../models/User')
const Log = require('../models/Log')

// @route    GET api/log
// @desc     get roommate log for logged in user
// @access   private
router.get('/', auth, async (req, res) => {
  try {
    const log = await Log.find({ user: req.user.id }).sort({ date: -1 })
    res.json(log)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// @route    POST api/log
// @desc     post an entry into log
// @access   public
router.post(
  '/',
  [
    auth,
    [
      check('name', 'please include name').not().isEmpty(),
      check('header', 'please enter a header for this entry').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { name, header, content, category, completed, date } = req.body
    try {
      const newLog = new Log({
        name,
        header,
        content,
        //completed,
        date,
        user: req.user.id,
      })
      const log = await newLog.save()
      res.json(log)
    } catch (error) {
      console.error(error.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route    PUT api/log/:id
// @desc     update an entry in roommate log
// @access   public
router.put('/:id', auth, async (req, res) => {
  const { name, header, content, category, completed, date } = req.body

  // Build log object
  const logFields = {}
  if (name) logFields.name = name
  if (header) logFields.header = header
  if (content) logFields.content = content
  if (category) logFields.category = category
  if (completed) logFields.completed = completed
  if (date) logFields.date = date

  try {
    let log = await Log.findById(req.params.id)
    if (!log) return res.status(404).json({ message: 'log not found' })
    // Check if log belongs to user
    if (log.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'not authorized' })
    }
    log = await Log.findByIdAndUpdate(
      req.params.id,
      { $set: logFields },
      { new: true }
    )
    res.json(log)
  } catch (error) {}
})

// @route    DELETE api/log/:id
// @desc     delete entry in roommate log
// @access   public
router.delete('/:id', auth, async (req, res) => {
  try {
    const log = await Log.findById(req.params.id)
    if (!log) return res.status(404).json({ message: 'log not found' })
    // Logged in user can delete log entries
    if (log.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'not authorized' })
    }
    await Log.findByIdAndRemove(req.params.id)

    res.json({ message: 'Entry removed' })
  } catch (error) {}
})

module.exports = router
