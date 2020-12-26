const knex = require('../database/index');

module.exports = {
    async index(request, response, next) {
        try {
            const { todo_id, user_id } = request.query;

            console.log(todo_id, user_id);

            let results;

            if (todo_id && user_id) {
                results = await knex('todos')
                    .where({ 'todos.id': todo_id, 'todos.user_id': user_id })
                    .join('users', 'users.id', '=', 'todos.user_id')
                    .select('todos.*', 'users.first_name', 'users.last_name', 'users.email');
            } else if (todo_id) {
                results = await knex('todos')
                    .where({ 'todos.id': todo_id })
                    .join('users', 'users.id', '=', 'todos.user_id')
                    .select('todos.*', 'users.first_name', 'users.last_name', 'users.email');
            } else if (user_id) {
                results = await knex('todos')
                    .where({ 'todos.user_id': user_id })
                    .join('users', 'users.id', '=', 'todos.user_id')
                    .select('todos.*', 'users.first_name', 'users.last_name', 'users.email')
                    .orderBy('todos.id', 'asc');
            } else {
                results = await knex('todos')
                    .join('users', 'users.id', '=', 'todos.user_id')
                    .select('todos.*', 'users.first_name', 'users.last_name', 'users.email')
                    .orderBy('todos.id', 'asc');
            }
            
            return response.status(200).json(results);
        } catch (error) {
            next(error);
        }
    },
    async create(request, response, next) {
        try {
            const { todo, user_id } = request.body;

            await knex('todos').insert({ todo, user_id });

            return response.status(201).json({ msg: 'To do created '});
        } catch (error) {
            next(error);
        }
    },
    async delete(request, response, next) {
        try {
            const { id } = request.params;

            await knex('todos').where({ id }).del();

            return response.status(200).json({ msg: 'To do deleted' });
        } catch (error) {
            next(error);
        }
    },
    async update(request, response, next) {
        try {
            const { id } = request.params;
            const { todo } = request.body;

            await knex('todos').update({ todo }).where({ id });

            return response.status(200).json({ msg: 'To do updated' });
        } catch (error) {
            next(error);
        }
    }
}