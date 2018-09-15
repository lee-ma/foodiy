module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    id: {
      type: DataTypes.INTEGER,
      field: 'id',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.STRING,
      field: 'content',
      allowNull: false
    }
  })

  Comment.associate = model => {
    const { Recipe, User } = model

    Comment.belongsTo(Recipe, { as: "recipe" })
    Comment.belongsTo(User, { as: "poster" })
  }

  return Comment
}
