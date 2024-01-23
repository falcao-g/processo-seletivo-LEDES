/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('usuario', (table) => {
  table.uuid('uuid').primary().notNullable();
  table.string('nome', 100).notNullable();
  table.string('cargo', 100).notNullable();
  table.string('cpf', 11).unique().notNullable();
  table.string('password', 100).notNullable();
  table.binary('foto');
  table.date('dataNascimento').notNullable();
  table.integer('matricula').notNullable();
  table.enum('situacaoCracha', ['ANALISE', 'APROVADO', 'RECUSADO']).defaultTo('ANALISE');
  table.enum('papel', ['ADMIN', 'USER']).defaultTo('USER');
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTableIfExists('usuario');
