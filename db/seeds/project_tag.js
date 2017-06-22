
exports.seed = function(knex, Promise) {
  return knex.raw(
    "TRUNCATE project_tag RESTART IDENTITY;"
  )
  .then(function () {
    return knex('project_tag').insert([
      {project_id: 1, tag_id: 4},
      {project_id: 1, tag_id: 8},
      {project_id: 1, tag_id: 9},
      {project_id: 1, tag_id: 5},
      {project_id: 1, tag_id: 11},
      {project_id: 2, tag_id: 1},
      {project_id: 2, tag_id: 2},
      {project_id: 2, tag_id: 3},
      {project_id: 2, tag_id: 4},
      {project_id: 2, tag_id: 5},
      {project_id: 2, tag_id: 6},
      {project_id: 2, tag_id: 7},
      {project_id: 2, tag_id: 8},
      {project_id: 2, tag_id: 9},
      {project_id: 2, tag_id: 12},
    ]);
  });
};
