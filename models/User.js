const bcrypt = require("bcrypt")

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      field: "id",
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      field: "firstName",
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      field: "lastName",
      allowNull: false
    },
    googleId: {
      type: DataTypes.STRING,
      field: "googleId",
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      field: "email",
      allowNull: true,
      validate: {
        isEmail: {
          args: true,
          msg: "Email is not valid"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      field: "password",
      allowNull: true,
      validate: {
        min: {
          args: [6],
          msg: "Password must be at least 6 characters in length"
        }
      }
    },
    avatarImage: {
      type: DataTypes.STRING,
      field: "avatarImage",
      allowNull: true
    }
  }, {
    hooks : {
      beforeCreate : (user, options) => {
        user.password = user.password && user.password !== "" ? bcrypt.hashSync(user.password, 10) : ""
      }
    }
  })

  User.prototype.validPassword = async function(password) {
    return await bcrypt.compareSync(password, this.password)
  }

  User.associate = models => {
    const { Recipe, User, Comment } = models

    User.hasMany(Recipe)
    User.hasMany(Comment)
  }

  return User
}