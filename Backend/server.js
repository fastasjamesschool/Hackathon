const express = require('express')
const app = express()
const port = 4000
const mongodb = require('./mongo-crud');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', async(req, res) => {
    res.send("Welcome!")
  })

app.get('/test', async(req, res) => {
    testStr = await mongodb.test()
    res.send(testStr)
  })
