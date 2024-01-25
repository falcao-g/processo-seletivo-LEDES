module.exports = (knex) => {
  async function check(register) {
    const user = await knex('user')
      .select('*')
      .where({ register })
      .first();

    return user;
  }

  async function findOne(register) {
    const user = await knex('user')
      .select('*')
      .where({ register })
      .first();

    return {
      register: user.register,
      name: user.name,
      cpf: user.cpf,
      role: user.role,
      situation: user.situation,
      dateOfBirth: user.dateOfBirth,
      image: user.image,
    };
  }

  async function editOne(register, user) {
    await knex('user')
      .where({ register })
      .update({
        register: user.register,
        name: user.name,
        cpf: user.cpf,
        role: user.role,
        dateOfBirth: user.dateOfBirth,
        image: user.image,
      });

    return findOne(user.register);
  }

  return { check, findOne, editOne };
};
