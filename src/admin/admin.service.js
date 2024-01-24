const controller = require("../admin/admin.controller");

async function changeSituation(req, res) {
    try {
        const {
            register, situation
        } = req.body;
        await controller.changeSituation(register, situation);
        res.status(201).send();
    } catch (err) {
        res.status(err.httpStatus).send({message: err.message});
    }
}

module.exports = {
    changeSituation
};
