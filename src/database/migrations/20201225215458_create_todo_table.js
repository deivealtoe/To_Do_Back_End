
exports.up = function(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id').notNullable().unique();
    table.text('todo').notNullable();
    table.integer('user_id').references('users.id').notNullable().onDelete('cascade');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('todos');
};
