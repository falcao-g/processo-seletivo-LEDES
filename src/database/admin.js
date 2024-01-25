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
    async function alwaysUserAnalyse(){
        return knex.select('uuid','name','cpf','image','dateOfBirth','register','situation').table('user')
            .where({situation: "ANALYSIS", type : "USER"});
    }

    return { updateSituation , alwaysUserAnalyse };
};
