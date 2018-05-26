const mongoose = require('mongoose');
const User = mongoose.model('user');
const Recipe = mongoose.model('recipe');

module.exports = app => {
  app.put('/api/recipes', (req, res) => {
    const newRecipe = new Recipe(
      {
        ...req.body,
        createdAt: Date.now(),
        author: req.user,
        comments: [],
        rating: null
      }
    )
    newRecipe
    .save()
    .then()
    .catch(err => console.log(err))
  })
}
