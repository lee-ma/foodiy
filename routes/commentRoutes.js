const { sequelize } = require("../index")

const User = sequelize.import("../models/User")
const Recipe = sequelize.import("../models/Recipe")
const Tag = sequelize.import("../models/Tag")
const Comment = sequelize.import("../models/Comment")

module.exports = app => {

  app.post("/api/recipes/:recipeId/comments", (req, res) => {
    Comment.create(
      {
        ...req.body,
        recipeId: req.params.recipeId,
        userId: req.user.id,
      }
    )
      .then(() => {
        Recipe.findOne({
          where: { id: req.params.recipeId },
          include: [
            {
              model: User
            },
            {
              model: Comment,
              include: [User]
            },
            {
              model: Tag,
              through: { attributes: [] }
            }
          ]
        })
          .then(foundRecipe => {
            res.send(foundRecipe)
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  })
}
