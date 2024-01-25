const jwt = require('jsonwebtoken');
const controller = require('./auth.controller');

const OK = 200;
const CREATED = 201;

async function signup(req, res) {
  try {
    const {
      name, cpf, role, dateOfBirth, password, image,
    } = req.body;
    const data = await controller.registerUser(name, cpf, role, dateOfBirth, password, image);
    res.status(CREATED).send(data);
  } catch (err) {
    res.status(err.httpStatus ?? 500).send({ message: err.message });
  }
}

async function login(req, res) {
  try {
    const { register, password } = req.body;
    const user = await controller.getUserByRegister(register);
    await controller.checkPassword(password, user.password);
    const { password: _, ...userWithoutPassword } = user;
    await jwt.sign(userWithoutPassword, process.env.SECRET, (err, token) => {
      if (err) throw err;

      res.cookie('jwt', token, { httpOnly: true });

      res.status(OK).send({ message: 'Login feito com sucesso!' });
    });
  } catch (err) {
    res.status(err.httpStatus ?? 500).send({ message: err.message });
  }
}

module.exports = {
  signup,
  login,
};
