const knex = require('knex');
const knexfile = require('../../knexfile');

const database = knex(knexfile);
database.auth = require('./auth')(database);
database.user = require('./user')(database);

module.exports = { database };
