const mongoose = require('mongoose');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const keys = require('../config/keys')

const User = mongoose.model('user');
const Recipe = mongoose.model('recipe');

module.exports = app => {
  app.get('/api/recipes', (req, res) => {
    // Default return all recipes TODO: add pagination
    if (!req.query.q) {
      Recipe.find({})
      .then(allRecipes => res.send(allRecipes))
      .catch(err => console.log(err))
    }

    // When there is a search term
    else {
      const { q } = req.query

      Recipe
      // .find({ $text: { $search: q }},
      // { score: {$meta: "textScore"}})
      // .sort({ score: { $meta: "textScore" } })
      
      .find({ "title": { $regex: q, $options: 'i' }})
      .then(recipes => {
        if (recipes.length === 0) res.send(["No Results"])
        else res.send(recipes)
      }).catch(err => console.log(err))
    }
  })

  app.get('/api/recipes/:id', (req,res) => {
    Recipe.findById(req.params.id)
    .populate("author")
    .then(foundRecipe => res.send(foundRecipe))
    .catch(err => console.log(err))
  })

  /* S3 Recipe Image Upload */
var s3 = new aws.S3();
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: keys.bucketName,
    acl: "public-read",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, `${Date.now().toString()}${file.originalname}`);
    }
  })
})
app.post('/api/recipes', upload.array('images'), (req, res) => {
  // Construct the recipe that'll be sent up
  const newRecipe = new Recipe(
    {
      ...req.body,
      steps: JSON.parse(req.body.steps),
      ingredients: JSON.parse(req.body.ingredients),
      images: req.files.map(file => file.location),
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
  .then(responses => res.send(responses[0]))
  .catch(err => console.log(err))
})
}
