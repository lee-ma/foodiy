const express = require('express')
const passport = require('passport')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const keys = require('./config/keys')

const db = {}

const sequelize = new Sequelize(keys.postgresURI)

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

require('./services/passport')
require('./services/awsconfig')

/* Import models */
const User = sequelize.import('./models/User')
const Recipe = sequelize.import('./models/Recipe')
const Comment = sequelize.import('./models/Comment')

/* Sync with db */
User.sync()
Recipe.sync()
Comment.sync()

/* Associate models */
db.User = User
db.Recipe = Recipe
db.Comment = Comment

const { models } = sequelize

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(db)
  }
})

/* Connect to db */
sequelize.authenticate()
  .then(() => console.log("connected to db"))
  .catch(err => console.error(err))

const app = express()

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use(
  cookieSession({
    maxAge: 60 * 60 * 24 * 1000 * 10,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/recipeRoutes')(app)
require('./routes/commentRoutes')(app)

if (process.env.NODE_ENV === 'production') {
  // Express needs to serve up production assets like main.js
  app.use(express.static('client/build'))

  // Express needs to give index.html if it doesn't recognize the route
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log('Running on port ', PORT)
})
