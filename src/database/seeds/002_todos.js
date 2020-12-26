
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        { todo: 'To do 1', user_id: 1 },
        { todo: 'To do 2', user_id: 2 },
        { todo: 'To do 3', user_id: 3 },
        { todo: 'To do 4', user_id: 4 },
        { todo: 'To do 5', user_id: 2 },
        { todo: 'To do 6', user_id: 5 },
        { todo: 'To do 7', user_id: 1 },
        { todo: 'To do 8', user_id: 4 },
        { todo: 'To do 9', user_id: 3 }
      ]);
    });
};
