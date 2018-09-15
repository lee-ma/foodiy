const express = require('express')
const passport = require('passport')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const keys = require('./config/keys')

// require('./services/passport')
// require('./services/awsconfig')

const sequelize = new Sequelize(keys.postgresURI)

sequelize.authenticate()
  .then(() => console.log("authenticated"))
  .catch(err => console.error(err))

const User = require('./models/User')(sequelize, Sequelize)
const Recipe = require('./models/Recipe')(sequelize, Sequelize)
const Comment = require('./models/Comment')(sequelize, Sequelize)

User.findAll()
  .then(users => console.log(users))

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
// app.use(passport.initialize())
// app.use(passport.session())

// require('./routes/authRoutes')(app)
// require('./routes/recipeRoutes')(app)

if (process.env.NODE_ENV === 'production') {
  // Express needs to serve up production assets like main.js
  app.use(express.static('client/build'))

  // Express needs to give index.html if it doesn't recognize the route
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Running on port ', PORT)
})
