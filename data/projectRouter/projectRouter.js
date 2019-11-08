const express = require('express')

const projectHelper = require('./projectModel')

const router = express.Router()

router.get('/', (req,res)=>{
    //working
    projectHelper.find()
    .then(project=>{
        res.status(200).json(project)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error: 'something went wrong'})
    })
})

router.get('/resources', (req,res)=>{
    projectHelper.findResources()
    .then(resource=>{
        res.status(200).json(resource)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:"something went wrong"})
    })
})

router.get('/tasks', (req,res)=>{
    projectHelper.findTasks()
    .then(task=>{
        res.status(200).json(task)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:"something went wrong"})
    })
})

router.post('/', (req,res)=>{
    projectHelper.add(req.body)
    .then(success=>{
        res.status(201).json(success)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})

router.post('/resource', (req,res)=>{
    projectHelper.addResource(req.body)
    .then(success=>{
        res.status(201).json(success)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})

router.post('/:id/task', (req,res)=>{
    projectHelper.addTask(req.body, req.params.id)
    .then(success=>{
        res.status(201).json(success)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;