const controller = require('./admin.controller');

async function changeSituation(req, res) {
  try {
    const {
      register, situation,
    } = req.body;
    await controller.changeSituation(register, situation);
    res.status(201).send();
  } catch (err) {
    res.status(err.httpStatus ?? 500).send({ message: err.message });
  }
}

async function alwaysUserAnalyse(req, res) {
  try {
    const data = await controller.alwaysUserAnalyse();
    res.status(201).send(data);
  } catch (err) {
    res.status(err.httpStatus ?? 500).send({ message: err.message });
  }
}

module.exports = {
  changeSituation,
  alwaysUserAnalyse,
};
