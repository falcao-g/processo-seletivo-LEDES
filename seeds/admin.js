const { v4 } = require('uuid');
const bcrypt = require('bcrypt');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user').del();
  await knex('user').insert([
    {
      uuid: v4(),
      name: 'admin',
      register: 12345678,
      cpf: '12345678910',
      password: bcrypt.hashSync('123456', 10),
      role: 'CEO',
      dateOfBirth: '1998-11-11',
      image: 'teste',
      situation: 'APPROVED',
      type: 'ADMIN',
    },
  ]);
};
