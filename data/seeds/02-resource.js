
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'a peer programming buddy', description:'this will help with any blockers'},
        {id: 2, name: 'Udemy subscription', description:'Classes here can strengthen your skills'},
        {id: 3, name: 'lambda training kit'}
      ]);
    });
};
