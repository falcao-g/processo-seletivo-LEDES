const {ValidationError} = require("../error/ValidationError");
const {database} = require("../database/knex");

async function changeSituation(register,situation) {
    if (!register) throw new ValidationError('A matricula do usuário é obrigatório');
    if (!situation) throw new ValidationError('A situacao é obrigatório');
    if (situation !== 'APPROVED' &&  situation !== 'DISAPPROVED') throw new ValidationError('A situação deve ser APPROVED ou DISAPPROVED');
    const user = {
        situation, register
    };
    return await database.admin.updateSituation(user);
}

module.exports = {
    changeSituation
};
