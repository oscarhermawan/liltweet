var jwt = require('jsonwebtoken')
const methods = {}

methods.authUser = function(req, res, next){
  jwt.verify(req.headers.token, 'secret', function(err, decoded){
    if(!err){
      if(decode.username == req.body.username){
        next()
      } else {
        res.send('Anda tidak punya akses')
      }
    }
    else{
      res.send('Anda tidak punya akses')
    }
  })
}

module.exports = methods
