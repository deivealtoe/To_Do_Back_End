const knex = require('../database/index');

module.exports = {
    async getAll(request, response, next) {
        try {
            const results = await knex('users');

            return response.status(200).json(results);
        } catch (error) {
            next(error);
        }
    },
    async getSingle(request, response, next) {
        try {
            const { id } = request.params;

            const result = await knex('users').where({ id });

            return response.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
    async create(request, response, next) {
        try {
            const { first_name, last_name, email } = request.body;

            await knex('users').insert({ first_name, last_name, email });

            return response.status(201).json({ msg: "User created "});
        } catch (error) {
            next(error);
        }
    },
    async delete(request, response, next) {
        try {
            const { id } = request.params;

            await knex('users').where({ id }).del();

            return response.status(200).json({ msg: "User deleted "});
        } catch (error) {
            next(error);
        }
    },
    async update(request, response, next) {
        try {
            const { id } = request.params;
            const { first_name, last_name, email } = request.body;

            await knex('users').update({ first_name, last_name, email }).where({ id });

            return response.status(200).json({ msg: "User updated "});
        } catch (error) {
            next(error);
        }
    }
}