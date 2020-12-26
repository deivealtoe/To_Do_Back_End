
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { first_name: 'Mario'},
        { first_name: 'Maria', last_name: 'Silva'},
        { first_name: 'João', email: 'joao@protonmail.com' },
        { first_name: 'Sergio'},
        { first_name: 'Carla', last_name: 'Ferreira'},
        { first_name: 'Mateus', email: 'mateus@gmail.com' }
      ]);
    });
};
