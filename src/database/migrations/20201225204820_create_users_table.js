
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').unique().notNullable();
    table.text('first_name').notNullable();
    table.text('last_name');
    table.text('email').unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
