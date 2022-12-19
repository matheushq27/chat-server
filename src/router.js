const express = require('express')
const router = express.Router()
const usersControllers = require('./controllers/usersControllers')


router.get('/', (req, res) => {
      res.json({
        message: 'Hello worlld',
      })
})

router.get('/users', usersControllers.getUsers)
router.post('/users', usersControllers.createUsers)
router.get('/users/:userName', usersControllers.getUsersByUserName)

router.post('/login', usersControllers.login)

module.exports = router