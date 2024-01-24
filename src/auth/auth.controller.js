const bcrypt = require('bcrypt');
const { database } = require('../database/knex');
const { ValidationError } = require('../error/ValidationError');

async function checkIfUserExists(cpf) {
  const player = await database.auth.findOneByCPF(cpf);
  if (player) throw new ValidationError('Usuário já cadastrado!');
}

async function encryptPassword(password) {
  const saltRounds = 10;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);
  return encryptedPassword;
}

async function registerUser(name, cpf, role, dateOfBirth, password, image) {
  if (!name) throw new ValidationError('O nome é obrigatório');
  if (!cpf) throw new ValidationError('O CPF é obrigatório');
  if (!role) throw new ValidationError('O cargo é obrigatório');
  if (!dateOfBirth) throw new ValidationError('A data de nascimento é obrigatória');
  if (!password) throw new ValidationError('A senha é obrigatória');
  if (!image) throw new ValidationError('A imagem é obrigatória');
  const register = Math.floor(Math.random() * 1000000);
  const encryptedPassword = await encryptPassword(password);
  await checkIfUserExists(cpf);
  const user = {
    register, name, cpf, role, dateOfBirth, encryptedPassword, image,
  };
  const data = await database.auth.registerUser(user);
  return data;
}

async function getUserByRegister(register) {
  if (!register) throw new ValidationError('O número de matrícula é obrigatório');
  const user = await database.auth.findOne(register);
  if (!user) throw new ValidationError('Usuário não encontrado');
  return user;
}

async function checkPassword(password, encryptedPassword) {
  if (!password) throw new ValidationError('Password is required');
  const isPasswordValid = await bcrypt.compare(password, encryptedPassword);
  if (!isPasswordValid) throw new ValidationError('Invalid password');
  return isPasswordValid;
}

module.exports = {
  checkIfUserExists,
  registerUser,
  getUserByRegister,
  checkPassword,
};
