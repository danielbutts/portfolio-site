
exports.seed = function(knex, Promise) {
  return knex.raw(
    "TRUNCATE tags RESTART IDENTITY;"
  )
  .then(function () {
    return knex('tags').insert([
      {id: 1, name: 'Java', category: 'compiled', color: '#74C5AD'},
      {id: 2, name: 'Spring', category: 'compiled', color: '#74C5AD'},
      {id: 3, name: 'Microservices', category: 'architecture', color: '#8B2835'},
      {id: 4, name: 'Postgres', category: 'database', color: '#867F93'},
      {id: 5, name: 'HTML/CSS', category: 'markup', color: '#45414D'},
      {id: 6, name: 'ChartJS', category: 'library', color: '#B8AEAE'},
      {id: 7, name: 'AngularJS', category: 'interpreted', color: '#91A3A9'},
      {id: 8, name: 'Express', category: 'interpreted', color: '#91A3A9'},
      {id: 9, name: 'Node', category: 'interpreted', color: '#91A3A9'},
      {id: 10, name: 'KnexJS', category: 'database', color: '#867F93'},
      {id: 11, name: 'Sequelize', category: 'database', color: '#867F93'},
      {id: 12, name: 'Spring Data JPA', category: 'database', color: '#867F93'},
    ]);
  });
};
