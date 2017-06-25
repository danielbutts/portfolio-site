
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
        deploy_service: 'heroku',
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
        deploy_service: 'heroku',
        image_url: 'https://raw.githubusercontent.com/danielbutts/job-tracker/master/screenshot.png',
        bkgd_grad_start: '#CCC5BD',
        bkgd_grad_end: '#E5E2DE'
      },
      { id: 3,
        name: 'Pixel Image Editor',
        description: 'A simple client-side drawing tool built with HTML/CSS and Javascript as an exercise in DOM manipulation using jQuery. Features click-and-drag painting, default color palette, and flood fill.',
        priority: 10,
        repo_url: 'https://github.com/danielbutts/pixel-art-maker',
        deploy_url: 'https://daniels-pixel-maker.firebaseapp.com/',
        deploy_service: 'firebase',
        image_url: 'https://github.com/danielbutts/pixel-art-maker/blob/master/screenshot.png?raw=true',
        bkgd_grad_start: '#d6c9dc',
        bkgd_grad_end: '#ebdef0'
      },
      { id: 4,
        name: 'Article Aggregator',
        description: 'AngularJS clone of popular article aggregator sites like Reddit. Allows users to post, edit, and delete articles as well as add comments and vote individual articles up or down.',
        priority: 4,
        repo_url: 'https://github.com/danielbutts/reddit-clone',
        deploy_url: 'https://angularjs-article-aggregator.herokuapp.com/',
        deploy_service: 'heroku',
        image_url: 'https://github.com/danielbutts/reddit-clone/blob/master/screenshot.png?raw=true',
        bkgd_grad_start: '#FDE0C6',
        bkgd_grad_end: '#FEEFE2'
      },
      { id: 5,
        name: 'Online Donut Shop',
        description: 'This application was built as an exercise creating full-stack CRUD apps using Node and Express. Data is persisted in a Postgres database using KnexJS.',
        priority: 4,
        repo_url: 'https://github.com/danielbutts/donut-store-site',
        deploy_url: 'https://online-donut-shop.herokuapp.com/',
        deploy_service: 'heroku',
        image_url: 'https://github.com/danielbutts/donut-store-site/blob/master/screenshot.png?raw=true',
        bkgd_grad_start: '#FDE0C6',
        bkgd_grad_end: '#FEEFE2'
      },
      
      

      
    ]);
  });
};
