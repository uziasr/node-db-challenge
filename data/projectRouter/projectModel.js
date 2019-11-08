const db = require('../db-config')

function find(){
    return db('projects')
}

function findTasks(){
    return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select('t.*', 'p.name','p.description')
}

function findResources(){
    return db('resources')
}

function add(project){
    return db('projects').insert(project)
}

function addTask(task, id){
    return db('tasks').insert({...task, project_id: id})
}

function addResource(resource){
    return db('resources').insert(resource)
}

module.exports = {find, findResources, findTasks, add, addResource, addTask}