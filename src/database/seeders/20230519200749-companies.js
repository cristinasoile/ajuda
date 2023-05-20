// const Company = require('../models/companyModel');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const companiesData =
    await queryInterface.bulkInsert('Companies',
      [{
        companyName: 'Empresa 1',
        streetName: 'Rua A',
        addressNumber: '123',
        neighborhood: 'Bairro 1',
        city: 'Cidade 1',
        state: 'Estado 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyName: 'Empresa 2',
        streetName: 'Rua B',
        addressNumber: '456',
        neighborhood: 'Bairro 2',
        city: 'Cidade 2',
        state: 'Estado 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // await Company.bulkCreate(companiesData);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Companies', null, {});
  },
};
