const { v4 } = require('uuid');

module.exports = (knex) => {
    async function updateSituation(user) {
        const {
            register,situation
        } = user;

        let data = await knex('user').where({register: register}).update({
            situation
        }).then(function (result){
           return result;
        });
    }

    return { updateSituation };
};
