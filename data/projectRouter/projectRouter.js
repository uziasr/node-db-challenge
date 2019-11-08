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

module.exports = router;