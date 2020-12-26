const knex = require('../database/index');
const { getSingle, create } = require('./UserController');

module.exports = {
    async getAll(request, response, next) {
        try {
            const results = await knex('todos')
                .join('users', 'users.id', '=', 'todos.user_id')
                .select('todos.*', 'users.first_name', 'users.last_name', 'users.email');

            return response.status(200).json(results);
        } catch (error) {
            next(error);
        }
    },
    async getSingle(request, response, next) {
        try {
            const { id } = request.params;

            const result = await knex('todos')
                .where('todos.id', id)
                .join('users', 'users.id', '=', 'todos.user_id')
                .select('todos.*', 'users.first_name', 'users.last_name', 'users.email');;

            return response.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
    async getFromUser(request, response, next) {
        try {
            const { user_id } = request.params;

            const results = await knex('todos')
                .where('todos.user_id', user_id)
                .join('users', 'users.id', '=', 'todos.user_id')
                .select('todos.*', 'users.first_name', 'users.last_name', 'users.email');

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
    }
}