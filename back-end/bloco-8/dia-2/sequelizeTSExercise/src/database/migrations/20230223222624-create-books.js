'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('books', {
     id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    author_id: {
      type: Sequelize.INTEGER,
      field: 'author_id',
      references: {
        model: 'authors',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
    },
    genre_id: {
      type: Sequelize.INTEGER,
      field: 'genre_id',
      references: {
        model: 'genres',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
    }
     });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  }
};
