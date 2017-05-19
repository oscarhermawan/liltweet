const express = require('express')
const router = express.Router()
const api = require('../controllers/userController')
const auth = require('../helper/jwt_validation.js') //auth
var passport = require('passport')

router.get('/', api.getAllUsers)
router.get('/:id', api.getById)
router.post('/', api.insertUser)
router.delete('/:id', auth.authUser, api.deleteUser)

//login local
router.post('/signin', passport.authenticate('local', {session:false}), function(req,res){
  var user = req.user
  res.send(user)
})

module.exports = router
