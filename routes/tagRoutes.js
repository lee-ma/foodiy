const { sequelize } = require("../index")

const Tag = sequelize.import("../models/Tag")

module.exports = app => {
  app.get("/api/tags", (req, res) => {
    Tag.findAll()
      .then(tags => res.status(200).send(tags))
      .catch(err => console.error(err))
  })
}
