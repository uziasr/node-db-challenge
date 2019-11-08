
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'complete website', description:'Complete and deploy a fully functional website', completed:false},
        {id: 2, name: 'make connections', description:'make connections via linkedIn and meetups', completed:true},
        {id: 3, name: 'eat better', description:'eat better for 30 days', completed:''}
      ]);
    });
};
