//dependencias
const router = require('express').Router()

//file import
const Services = require('./users.services')

router.get('/users', Services.getAllUsers)
router.post('/users', Services.postNewUsers)

router.get('/users/random', Services.getRandomUsers )
router.get('/users/:id', Services.getAllUsersById)
router.delete('/users/delete/:id', Services.DeleteAllUsersById)


module.exports = router