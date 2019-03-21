exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', user => {
    user.increments('id');
    user.string('name').notNullable();
    user.string('email').unique();
    user.string('password').notNullable();
    user.integer('age').notNullable();
    user.string('sex').notNullable();
    user.string('city').notNullable();
    user.integer('areaCode').notNullable();
    user.string('bio');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
