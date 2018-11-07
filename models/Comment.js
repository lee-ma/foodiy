module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("comment", {
    id: {
      type: DataTypes.INTEGER,
      field: "id",
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.STRING,
      field: "content",
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER,
      field: "rating",
      allowNull: true
    },
    recipeId: {
      type: DataTypes.INTEGER,
      field: "recipeId",
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      field: "userId",
      allowNull: false
    }
  })

  Comment.associate = model => {
    const { Recipe, User, Comment } = model

    Comment.belongsTo(Recipe)
    Comment.belongsTo(User)
  }

  return Comment
}
