const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dotenv = require("dotenv")
dotenv.config()

const db = require('./db')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
      response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)

app.listen(port, () => {
      console.log(`App running on port ${port}.`)
})

