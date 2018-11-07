const { sequelize, Sequelize } = require("../index")
const aws = require("aws-sdk")
const multer = require("multer")
const multerS3 = require("multer-s3")
const keys = require("../config/keys")

const { Op } = Sequelize
const User = sequelize.import("../models/User")
const Tag = sequelize.import("../models/Tag")
const RecipeTag = sequelize.import("../models/RecipeTag")
const Recipe = sequelize.import("../models/Recipe")
const Comment = sequelize.import("../models/Comment")

module.exports = app => {
  app.get("/api/recipes", (req, res) => {
    // TODO: add pagination
    const { q } = req.query

    Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "firstName", "lastName", "avatarImage"]
        },
        {
          model: Comment,
          include: [{
            model: User,
            attributes: ["id", "firstName", "lastName", "avatarImage", "createdAt"]
          }]
        },
        {
          model: Tag,
          through: { attributes: [] }
        }
      ]
    })
      .then(recipes => res.send(recipes))

    // Recipe.findAll({
    //   where: {
    //     [Op.or]: [
    //       {
    //         title: {
    //           [Op.iLike]: `%${q}%`
    //         }
    //       },
    //       {
    //         description: {
    //           [Op.iLike]: `%${q}%`
    //         }
    //       }
    //     ]
    //   },
    //   include: [
    //     {
    //       model: User,
    //       attributes: ["id", "firstName", "lastName", "avatarImage"]
    //     },
    //     {
    //       model: Comment,
    //       include: [{
    //         model: User,
    //         attributes: ["id", "firstName", "lastName", "avatarImage", "createdAt"]
    //       }]
    //     },
    //     {
    //       model: Tag,
    //       through: { attributes: [] }
    //     }
    //   ]
    // })
    //   .then(recipes => {
    //     if (recipes.length === 0) res.send(["No Results"])
    //     else res.send(recipes)
    //   }).catch(err => console.log(err))
  }
  )

  app.get("/api/recipes/:id", (req, res) => {
    Recipe.findOne(
      {
        where: { id: req.params.id },
        include: [
          {
            model: User,
            attributes: ["id", "firstName", "lastName", "avatarImage"]
          },
          {
            model: Comment,
            include: [{
              model: User,
              attributes: ["id", "firstName", "lastName", "avatarImage", "createdAt"]
            }]
          },
          {
            model: Tag,
            through: { attributes: [] }
          }
        ]
      })
      .then(foundRecipe => res.send(foundRecipe))
      .catch(err => console.log(err))
  })

  /* S3 Recipe Image Upload */
  var s3 = new aws.S3()
  var upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: keys.bucketName,
      acl: "public-read",
      metadata: function(req, file, cb) {
        cb(null, { fieldName: file.fieldname })
      },
      key: (req, file, cb) => {
        cb(null, `${Date.now().toString()} - ${file.originalname}`)
      }
    })
  })

  app.post("/api/recipes", upload.array("images"), (req, res) => {
    const promises = []
    let newRecipe = {}
    // first, create the recipe
    Recipe.create(
      {
        ...req.body,
        time: Number(req.body.time),
        steps: JSON.parse(req.body.steps),
        ingredients: JSON.parse(req.body.ingredients),
        images: req.files.map(file => file.location),
        userId: req.user.id,
      }
    )
      // now we create RecipeTag for every recipe/tag relation we need to make
      .then(recipe => {
        newRecipe = recipe
        JSON.parse(req.body.tags).forEach(tagId => {
          const tagPromise = RecipeTag.create({ recipeId: recipe.id, tagId })
          promises.push(tagPromise)
        })
      })

    // save all the RecipeTags and return the recipe
    Promise.all(promises)
      .then(() => {
        Recipe.findById(newRecipe.id)
      })
      .then(recipe => res.send(recipe))
  })
}
