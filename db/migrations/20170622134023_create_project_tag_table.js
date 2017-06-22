
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project_tag', (table) => {
    table.increments();
    table.integer('project_id').notNullable();
    table.integer('tag_id').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('project_tag')
};
