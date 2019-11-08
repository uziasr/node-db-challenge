
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id:1, description:'flesh out every feature that will be used for this application', notes: 'write out all the features during this task', completed: true},
        {id: 2, project_id:1, description:'create redux store and flesh out react components', notes: 'do not add any additional features after this', completed: true},
        {id: 3, project_id:1, description:'create the necessary tables and endpoints for the backend', completed: false}
      ]);
    });
};
