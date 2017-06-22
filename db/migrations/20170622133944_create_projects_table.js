
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.integer('priority').notNullable().default(1);
    table.string('repo_url').notNullable();
    table.string('deploy_url').notNullable();
    table.string('image_url').notNullable();
    table.string('bkgd_grad_start').notNullable();
    table.string('bkgd_grad_end').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
};
