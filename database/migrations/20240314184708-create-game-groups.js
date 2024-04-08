'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GameGroups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      groupName: {
        type: Sequelize.STRING
      },
      key: {
        type: Sequelize.INTEGER,
      },
      maxPlayers: {
        type: Sequelize.INTEGER
      },
      currentPlayers: {
        type: Sequelize.INTEGER
      },
      selectedCards: {
        type: Sequelize.JSON, // Nuevo campo para almacenar un arreglo de tarjetas seleccionadas
        allowNull: false,
        defaultValue: [] // Valor inicial del arreglo vacío
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GameGroups');
  }
};