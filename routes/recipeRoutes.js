const mongoose = require('mongoose');
const User = mongoose.model('user');
const Recipe = mongoose.model('recipe');

module.exports = app => {
  app.get('/api/recipes', (req, res) => {
    Recipe.find({})
    .then(allRecipes => res.send(allRecipes))
    .catch(err => console.log(err))
  })

  app.get('/api/recipes/:id', (req,res) => {
    Recipe.findById(req.params.id)
    .then(foundRecipe => res.send(foundRecipe))
    .catch(err => console.log(err))
  })

  app.put('/api/recipes', (req, res) => {

    // Construct the recipe that'll be sent up
    const newRecipe = new Recipe(
      {
        ...req.body,
        createdAt: Date.now(),
        author: req.user._id,
        comments: [],
        rating: null
      }
    )

    // Construct the user's new recipe field
    let updatedUserRecipes = { recipes: req.user.recipes.concat(newRecipe._id) }

    // Update everything on Mongo
    const promise1 = newRecipe.save()
    const promise2 = User.findByIdAndUpdate(req.user._id, updatedUserRecipes)
    Promise.all([promise1, promise2])
    .then()
    .catch(err => console.log(err))
  })
}
