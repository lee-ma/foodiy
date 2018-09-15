const passport = require('passport')
const { sequelize } = require('../index')

const User = sequelize.import('../models/User')

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

  app.put('/api/user', (req, res) => {
    User.update(req.body, { returning: true, where: { id: req.user.id }})
      .then(([ rowsUpdate, [updatedUser]]) => {
        res.send(updatedUser)
      })
      .catch(err => console.error(err))
  })
}
