'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('urls', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      original_url:{
        type: Sequelize.STRING,
        allowNull: false
      },
      shrink_url:{
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('urls');
  }
};
