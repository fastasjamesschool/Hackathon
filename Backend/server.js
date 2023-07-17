const express = require('express')
const app = express()
const port = 4000
const mongodb = require('./mongo-crud');
const { log } = require('console');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use(express.json())

app.get('/api', async (req, res) => {
    testStr = await mongodb.test()
    res.send(testStr)
})

app.get('/api/Tasks', async (req, res) => {
    tasks = await mongodb.Tasks()
    //console.log("hi")
    res.send(tasks)
})

app.get('/api/:username', async (req, res) => {
    projects = await mongodb.Projects(req.params.username)
    // console.log({projects})
    res.send(projects)
})

app.get('/api/:username/Role', async (req, res) => {
    role = await mongodb.Role(req.params.username)
    //console.log({role})
    res.send(role)
})

app.get('/api/:username/Projects/:id', async (req, res) => {
    project = await mongodb.findProject(req.params.username, req.params.id)
    //console.log(req.params.username, req.params.id)
    res.send(project)
})

app.get('/api/:username/Projects/:id/Tasks', async (req, res) => {
    tasks = await mongodb.findTasksForProject(req.params.id)
    res.send(tasks)
})

app.get('/api/:username/Projects/:id/Tasks/:taskId', async (req, res) => {
    task = await mongodb.findTask(req.params.taskId)
    res.send(task)
})

app.post('/api/:username/Projects/:id/Tasks/:taskId', async (req, res) => {
    task = req.body
    // console.log(task)
    taskSubmited = await mongodb.insertTask(task)
    if (taskSubmited) {
        res.status(200).send()
    }
    else {
        res.status(404).send()
    }
    // task = await mongodb.findTask(req.params.taskId)
    // res.send(task)
})

app.post('/api/Auth', async (req, res) => {
    loginInfo = req.body
    user = await mongodb.userInDb(loginInfo.username)
    //console.log(user)
    if (user.length != 0) {
        res.status(200).send()
    }
    else {
        res.status(404).send()
    }
    // console.log("hi " + JSON.stringify(loginInfo))
})

// app.get('/api/Users', async(req, res) => {
//     users = await mongodb.Users()
//     res.send(users)
//   })
