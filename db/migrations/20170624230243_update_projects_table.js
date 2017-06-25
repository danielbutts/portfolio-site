
exports.up = function(knex, Promise) {
  return knex.schema.table('projects', function (table) {
    table.string('deploy_service').notNullable().default('heroku');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('projects', function (table) {
    table.dropColumn('deploy_service');
  });
};
