const controller = require('./user.controller');

const OK = 200;

async function getUser(req, res) {
  try {
    const { register } = req.user;
    const data = await controller.getUserInfo(register);
    res.status(OK).send(data);
  } catch (err) {
    res.status(err.httpStatus ?? 500).send({ message: err.message });
  }
}

async function editUser(req, res) {
  try {
    const { register } = req.user;
    const user = req.body;
    const data = await controller.editUserInfo(register, user);
    res.status(OK).send(data);
  } catch (err) {
    res.status(err.httpStatus ?? 500).send({ message: err.message });
  }
}

module.exports = {
  getUser,
  editUser,
};
