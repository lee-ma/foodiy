const passport = require('passport')
const mongoose = require('mongoose')
const User = mongoose.model('user')

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/')
    }
  )

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  app.get('/api/user', (req, res) => {
    res.send(req.user)
  })

  app.put('/api/user', (req) => {
    User.findByIdAndUpdate(req.user._id, req.body)
      .then()
      .catch(err => console.log(err))
  })
}
