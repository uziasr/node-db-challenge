
exports.up = function(knex) {
  return knex.schema 
  .createTable("projects", tbl=>{
      tbl.increments()
      tbl.string('name', 128).unique().notNullable()
      tbl.string('description', 255)
      tbl.boolean('completed').default(false)
  })
  .createTable('tasks', tbl=>{
      tbl.increments()
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
      tbl.string('description',255).notNullable()
      tbl.string('notes', 255)
      tbl.boolean('completed').notNullable()
  })
  .createTable('resources', tbl=>{
      tbl.increments()
      tbl.string('name',128).notNullable()
      tbl.string('description',255)
  })
  .createTable('project_resources', tbl=>{
      tbl.increments()
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
      tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects')
  .dropTableIfExists('resources')
};
