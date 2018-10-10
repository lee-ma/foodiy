const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const LocalStrategy = require("passport-local").Strategy
const keys = require("../config/keys")
const _ = require("lodash")
const { sequelize } = require("../index")

const User = sequelize.import("../models/User")

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
      callbackURL: "/auth/google/callback",
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

passport.use("local-signup",
  new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
  }, (req, email, password, done) => {
    User.findOne({ where: { email: email }})
      .then(existingUser => {
        if(existingUser) {
          return done(null, false, { message: "User with this email already exists" })
        }
        User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: email,
          password: password
        })
          .then(user => done(null, user))
      })
  })
)

passport.use("local-login",
  new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
  }, (req, email, password, done) => {
    User.findOne({ where: { email: email }})
      .then(async existingUser => {
        if(!existingUser) {
          return done(null, false, { message: "No user associated with that email" })
        }
        if(!await existingUser.validPassword(password)) {
          return done(null, false, { message: "Invalid password" })
        }

        return done(null, existingUser)
      })
  })
)
