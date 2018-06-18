const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

require('./models/User');
require('./models/Recipe');
require('./models/Comment');
require('./services/passport');
require('./services/awsconfig');

const User = mongoose.model('user');
const Recipe = mongoose.model('recipe');

mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 60 * 60 * 24 * 1000 * 10,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/recipeRoutes')(app);

if (process.env.NODE_ENV == 'production') {
  // Express needs to serve up production assets like main.js
  app.use(express.static('client/build'));

  // Express needs to give index.html if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
  console.log('Running on port ', PORT);
});
