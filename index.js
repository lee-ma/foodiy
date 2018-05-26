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

const User = mongoose.model('user');

mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI);

const app = express();

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

const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
  console.log('Running on port ', PORT);
});
