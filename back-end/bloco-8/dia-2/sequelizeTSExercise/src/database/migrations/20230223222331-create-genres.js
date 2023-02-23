'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('genres', {
     id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
     },
    genre: {
      allowNull: false,
      type: Sequelize.STRING(30),
    }  });

  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('genres');

  }
};
