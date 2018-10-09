module.exports = (sequelize, DataTypes) => {
  const RecipeTag = sequelize.define("recipetag", {
    recipeId: {
      type: DataTypes.INTEGER,
      field: "recipeId",
      allowNull: false
    },
    tagId: {
      type: DataTypes.INTEGER,
      field: "tagId",
      allowNull: false
    }
  })

  return RecipeTag
}
