const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const _ = require('lodash')
const { sequelize } = require('../index')

const User = sequelize.import('../models/User')
const Recipe = sequelize.import('../models/Recipe')

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(user, done) {
  done(null, user)
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleclientID,
      clientSecret: keys.googleclientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ where: { googleId: profile.id }})
        .then(existingUser => {
          if (existingUser) {
            return done(null, existingUser)
          }
          User.create({
            googleId: profile.id,
            firstName: profile.name.givenName || "",
            lastName: profile.name.familyName || "",
          })
            .then(user => done(null, user))
        })
    }
  )
)
