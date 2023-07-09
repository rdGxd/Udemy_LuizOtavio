"use strict";// Criando a tabela de fotos dos alunos no banco de dados
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("fotos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        // Configurando Chave estrangeira
        references: {
          model: "alunos",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },

      // Os campos abaixo são preenchidos automaticamente (Isso foi configurado na database)
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("fotos");
  },
};
