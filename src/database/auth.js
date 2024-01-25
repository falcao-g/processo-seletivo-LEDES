const { v4 } = require('uuid');

module.exports = (knex) => {
  async function findOne(register) {
    const user = await knex('user')
      .select('*')
      .where({ register })
      .first();

    return user;
  }

  async function findOneByCPF(cpf) {
    const user = await knex('user')
      .select('*')
      .where({ cpf })
      .first();

    return user;
  }

  async function registerUser(user) {
    const uuid = v4();
    const {
      register, name, cpf, role, dateOfBirth, image,
    } = user;

    await knex('user').insert({
      uuid,
      register,
      name,
      cpf,
      role,
      dateOfBirth,
      password: user.encryptedPassword,
      image,
    });

    return {
      register,
      name,
      cpf,
      role,
      dateOfBirth,
      situation: 'ANALYSIS',
      image,
    };
  }

  return { findOne, registerUser, findOneByCPF };
};
