const express = require('express')
const router = express.Router()

// @route    GET api/log
// @desc     get roommate log for logged in user
// @access   private
router.get('/', (req, res) => {
  res.send('get log for logged in user')
})

// @route    POST api/log
// @desc     post an entry into log
// @access   public
router.post('/', (req, res) => {
  res.send('add entry in log')
})

// @route    PUT api/log/:id
// @desc     update an entry in roommate log
// @access   public
router.put('/:id', (req, res) => {
  res.send('update entry in log')
})

// @route    DELETE api/log/:id
// @desc     delete entry in roommate log
// @access   public
router.delete('/:id', (req, res) => {
  res.send('delete entry in log')
})

module.exports = router
