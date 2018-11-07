
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tags",
      [
        {
          name: "Chicken",
          color: "#007a1c",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Vegan",
          color: "#007a1c",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Vegetarian",
          color: "#007a1c",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Quick & Easy",
          color: "#007a1c",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Halal",
          color: "#007a1c",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Gluten-Free",
          color: "#007a1c",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Breakfast",
          color: "#007a1c",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lunch",
          color: "#007a1c",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dinner",
          color: "#007a1c",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nut-Free",
          color: "#007a1c",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dairy-Free",
          color: "#007a1c",
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
