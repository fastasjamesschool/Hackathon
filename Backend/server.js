const express = require('express')
const app = express()
const port = 4000
const mongodb = require('./mongo-crud');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/api', async(req, res) => {
    testStr = await mongodb.test()
    res.send(testStr)
  })

app.get('/api/Projects', async(req, res) => {
    projects = await mongodb.Projects()
    res.send(projects)
  })

app.get('/api/Projects/:id', async(req, res) => {
    project = await mongodb.findProject(req.params.id)
    res.send(project)
  })


app.get('/api/Projects/:id/Tasks', async(req, res) => {
    tasks = await mongodb.findTasksForProject(req.params.id)
    res.send(tasks)
  })

app.get('/api/Projects/:id/Tasks/:taskId', async(req, res) => {
    task = await mongodb.findTask(req.params.taskId)
    res.send(task)
  })
  
app.get('/api/Tasks', async(req, res) => {
    tasks = await mongodb.Tasks()
    res.send(tasks)
  })

app.get('/api/Users', async(req, res) => {
    users = await mongodb.Users()
    res.send(users)
  })
