
exports.up = function(knex) {
  return knex.schema.createTable('errors', (table) => {
    table.increments('id').notNullable().unique();
    table.text('error').notNullable();
    table.timestamp('ocurred_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('errors');
};
