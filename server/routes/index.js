const router = require('express').Router()

router.use('/api', require('./Post.js'))
router.use('/api', require('./User.js'))
router.use('/api', require('./mediumPost.js'))

module.exports = router