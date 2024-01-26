const controller = require('./admin.controller');

const OK = 200;

async function changeSituation(req, res) {
  try {
    const {
      register, situation,
    } = req.body;
    const message = await controller.changeSituation(register, situation);
    res.status(OK).send({ message });
  } catch (err) {
    res.status(err.httpStatus ?? 500).send({ message: err.message });
  }
}

async function listUserRequests(req, res) {
  try {
    const data = await controller.getPendingRequests();
    res.status(OK).send(data);
  } catch (err) {
    res.status(err.httpStatus ?? 500).send({ message: err.message });
  }
}

async function makeAdmin(req, res) {
  try {
    const { register } = req.body;
    const message = await controller.changeUserType(register);
    res.status(OK).send({ message });
  } catch (err) {
    res.status(err.httpStatus ?? 500).send({ message: err.message });
  }
}

module.exports = {
  changeSituation,
  listUserRequests,
  makeAdmin,
};
