module.exports = (knex) => {
  async function updateSituation(user) {
    const {
      register, situation,
    } = user;

    await knex('user').where({ register }).update({
      situation,
    });

    return 'Situação atualizada com sucesso!';
  }

  async function getUsers() {
    return knex.select('name', 'cpf', 'image', 'dateOfBirth', 'register', 'role', 'situation').table('user')
      .where({ situation: 'ANALYSIS', type: 'USER' });
  }

  async function findOne(register) {
    return knex('user')
      .select('*')
      .where({ register })
      .first();
  }

  async function promoteUser(user) {
    const { register } = user;

    await knex('user').where({ register }).update({
      type: 'ADMIN',
    });

    return 'Usuário promovido com sucesso!';
  }

  return {
    updateSituation, getUsers, findOne, promoteUser,
  };
};
