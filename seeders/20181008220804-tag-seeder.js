
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tags",
      [
        {
          name: "Chicken",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Vegan",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Vegetarian",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Quick & Easy",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Halal",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Gluten-Free",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Breakfast",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lunch",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dinner",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nut-Free",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dairy-Free",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
}
