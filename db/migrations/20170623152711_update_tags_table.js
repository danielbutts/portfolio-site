
exports.up = function(knex, Promise) {
  return knex.schema.table('tags', function (table) {
    table.string('color').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('color');
  });
};
