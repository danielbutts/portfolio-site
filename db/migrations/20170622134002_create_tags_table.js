
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('category').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tags')
};
