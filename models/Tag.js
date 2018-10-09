module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define("tag", {
    id: {
      type: DataTypes.INTEGER,
      field: "id",
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      field: "name",
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      field: "color",
      allowNull: false
    }
  })

  Tag.associate = models => {
    const { Tag, Recipe, RecipeTag } = models

    Tag.belongsToMany(Recipe, { through: RecipeTag })
  }

  return Tag
}
