const { ValidationError } = require('../error/ValidationError');
const { database } = require('../database/knex');

async function situantionIsAnalysis(register) {
  const user = await database.admin.findOne(register);
  if (user.situation !== 'ANALYSIS') throw new ValidationError('Só é possível mudar a situação quando está em ANALYSIS');
}

async function changeSituation(register, situation) {
  if (!register) throw new ValidationError('A matricula do usuário é obrigatório');
  if (!situation) throw new ValidationError('A situação é obrigatório');
  if (situation !== 'APPROVED' && situation !== 'DISAPPROVED') throw new ValidationError('A situação deve ser APPROVED ou DISAPPROVED');
  await situantionIsAnalysis(register);
  const user = {
    situation, register,
  };
  return database.admin.updateSituation(user);
}

async function getPendingRequests() {
  return database.admin.getUsers();
}

async function changeUserType(register) {
  const user = await database.admin.findOne(register);
  if (user.type === 'ADMIN') throw new ValidationError('O usuário já é um administrador');
  return database.admin.promoteUser({ register });
}

module.exports = {
  changeSituation,
  getPendingRequests,
  changeUserType,
};
