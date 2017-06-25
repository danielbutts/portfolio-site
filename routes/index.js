const express = require('express');
const knex = require('../db/connection');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const projects = {};
  knex.select('projects.id as project_id', 'projects.name as project_name', 'description', 'priority', 'repo_url', 'deploy_url', 'image_url', 'bkgd_grad_start', 'bkgd_grad_end', 'tags.name as tag_name', 'tags.id as tag_id', 'category', 'color').from('projects')
    .leftOuterJoin('project_tag', 'projects.id', 'project_tag.project_id')
    .leftOuterJoin('tags', 'tags.id', 'project_tag.tag_id')
    .orderBy('priority', 'desc')
    .orderBy('category', 'desc')
    .then((results) => {
      results.forEach((result) => {
        let project;
        if (projects[result.project_id] === undefined) {
          project = result;
          project.tags = [];
          projects[result.project_id] = project;
        } else {
          project = projects[result.project_id];
        }

        if (result.tag_id !== undefined) {
          project.tags.push({
            name: result.tag_name,
            category: result.category,
            color: result.color });
        }
      });
      Object.values(projects).forEach((el) => {
        const project = el;
        delete project.tag_id;
        delete project.tag_name;
        delete project.category;
        delete project.color;
      });
    })
    .catch((err) => {
      console.error(err);
    });
  res.render('index', { projects });
});

module.exports = router;
