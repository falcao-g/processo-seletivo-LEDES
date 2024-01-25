const { database } = require('../database/knex');
const { ValidationError } = require('../error/ValidationError');

async function checkIfUserExists(register) {
  const user = await database.user.check(register);
  if (!user) throw new ValidationError('Usuário não existe!', 404);
}

async function getUserInfo(register) {
  await checkIfUserExists(register);
  const user = await database.user.findOne(register);
  return user;
}

async function editUserInfo(register, user) {
  await checkIfUserExists(register);
  if (!user.name) throw new ValidationError('O nome é obrigatório');
  if (!user.cpf) throw new ValidationError('O CPF é obrigatório');
  if (!user.role) throw new ValidationError('O cargo é obrigatório');
  if (!user.dateOfBirth) throw new ValidationError('A data de nascimento é obrigatória');
  if (!user.image) throw new ValidationError('A imagem é obrigatória');
  const data = await database.user.editOne(register, user);
  return data;
}

module.exports = {
  getUserInfo,
  editUserInfo,
};
