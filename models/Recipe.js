module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('recipe', {
    id: {
      type: DataTypes.INTEGER,
      field: "id",
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      field: "title",
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      field: "description",
      allowNull: false
    },
    ingredients: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      field: "ingredients",
      allowNull: false
    },
    steps: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      field: "steps",
      allowNull: false
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      field: "images",
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER,
      field: "rating",
      allowNull: true
    },
    time: {
      type: DataTypes.DECIMAL,
      field: "time",
      allowNull: false
    }
  })

  Recipe.associate = models => {
    const { User, Comment } = models

    Recipe.belongsTo(User, {
      onUpdate: "cascade"
    })
    //Recipe.hasMany(Comment, { foreignKey: "recipeId" })
  }

  return Recipe
}

