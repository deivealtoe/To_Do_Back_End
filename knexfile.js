// Update with your config settings.

module.exports = {

  production: {
    client: 'pg',
    connection: {
      database: 'to_do_back_end',
      user:     'postgres',
      password: 'p0$tgr3$',
      port:     '5433'
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }

};
