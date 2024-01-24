const { v4 } = require('uuid');

module.exports = (knex) => {
  async function findOne(register) {
    const item = await knex('usuario')
      .select('*')
      .where({ matricula: register })
      .first();

    return item;
  }

  async function findOneByCPF(cpf) {
    const item = await knex('usuario')
      .select('*')
      .where({ cpf })
      .first();

    return item;
  }

  async function registerUser(user) {
    const uuid = v4();
    await knex('usuario').insert({
      uuid,
      matricula: user.register,
      nome: user.name,
      cpf: user.cpf,
      cargo: user.role,
      dataNascimento: user.dateOfBirth,
      password: user.encryptedPassword,
    });

    return 'Usuário cadastrado com sucesso!';
  }

  return { findOne, registerUser, findOneByCPF };
};
