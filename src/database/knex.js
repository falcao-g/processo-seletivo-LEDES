const knex = require('knex');
const knexfile = require('../../knexfile');

const database = knex(knexfile);
database.auth = require('./auth')(database);

module.exports = { database };
