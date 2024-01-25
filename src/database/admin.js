module.exports = (knex) => {
  async function updateSituation(user) {
    const {
      register, situation,
    } = user;

    await knex('user').where({ register }).update({
      situation,
    }).then((result) => result);
  }
  async function alwaysUserAnalyse() {
    return knex.select('uuid', 'name', 'cpf', 'image', 'dateOfBirth', 'register', 'situation').table('user')
      .where({ situation: 'ANALYSIS', type: 'USER' });
  }

  async function findOne(register) {
    return knex('user')
      .select('*')
      .where({ register })
      .first();
  }

  return { updateSituation, alwaysUserAnalyse, findOne };
};
