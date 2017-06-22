
exports.seed = function(knex, Promise) {
  return knex.raw(
    "TRUNCATE tags RESTART IDENTITY;"
  )
  .then(function () {
    return knex('tags').insert([
      {id: 1, name: 'Java', category: 'compiled'},
      {id: 2, name: 'Spring', category: 'compiled'},
      {id: 3, name: 'Microservices', category: 'architecture'},
      {id: 4, name: 'Postgres', category: 'database'},
      {id: 5, name: 'HTML/CSS', category: 'markup'},
      {id: 6, name: 'ChartJS', category: 'library'},
      {id: 7, name: 'AngularJS', category: 'interpreted'},
      {id: 8, name: 'Express', category: 'interpreted'},
      {id: 9, name: 'Node', category: 'interpreted'},
      {id: 10, name: 'KnexJS', category: 'database'},
      {id: 11, name: 'Sequelize', category: 'database'},
      {id: 12, name: 'Spring Data JPA', category: 'database'},
    ]);
  });
};
