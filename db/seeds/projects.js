
exports.seed = function(knex, Promise) {
  return knex.raw(
    "TRUNCATE projects RESTART IDENTITY;"
  )
  .then(function () {
    return knex('projects').insert([
      { id: 1,
        name: 'Pantry Manager',
        description: 'Pantry Manager is a recipe search application that allows a user to make the most out of the ingredients they already have using the Yummly API.',
        priority: 1,
        repo_url: 'https://github.com/danielbutts/pantry-manager',
        deploy_url: 'https://pantry-and-recipe-manager.herokuapp.com/',
        image_url: 'https://raw.githubusercontent.com/danielbutts/pantry-manager/master/screenshots/pantry-manager-screenshot.png',
        bkgd_grad_start: '#F0DBC5',
        bkgd_grad_end: '#F7EDE2'
      },
      { id: 2,
        name: 'Search Tracker',
        description: 'Search Tracker is a proof of concept web application for tracking and managing the job search process and providing basic analytics.',
        priority: 2,
        repo_url: 'https://github.com/danielbutts/job-tracker',
        deploy_url: 'https://job-tracker-client-service.herokuapp.com/',
        image_url: 'https://raw.githubusercontent.com/danielbutts/job-tracker/master/screenshot.png',
        bkgd_grad_start: '#CCC5BD',
        bkgd_grad_end: '#E5E2DE'
      }
    ]);
  });
};
