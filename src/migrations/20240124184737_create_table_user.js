/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('user', (table) => {
  table.uuid('uuid').primary().notNullable();
  table.string('name', 100).notNullable();
  table.string('role', 100).notNullable();
  table.string('cpf', 11).unique().notNullable();
  table.string('password', 100).notNullable();
  table.binary('image');
  table.date('dateOfBirth').notNullable();
  table.integer('register').unique().notNullable();
  table.enum('situation', ['ANALYSIS', 'APPROVED', 'DISAPPROVED']).defaultTo('ANALYSIS');
  table.enum('type', ['ADMIN', 'USER']).defaultTo('USER');
});

/**
     * @param { import("knex").Knex } knex
     * @returns { Promise<void> }
     */
exports.down = (knex) => knex.schema.dropTableIfExists('user');
