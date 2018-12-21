require('dotenv').config()
const express = require('express')
const ctrl = require('./controller')
const massive = require('massive')
const {CONNECTION_STRING, SERVER_PORT} = process.env


const app = express();
app.use(express.json())


app.get(`/api/houses`, ctrl.getAll)

app.post(`/api/houses`, ctrl.createHouse)

app.delete(`/api/houses/:id`, ctrl.deleteHouse)


massive(CONNECTION_STRING).then(connection => {
  app.set('db', connection)
  app.listen(SERVER_PORT, ()=> console.log(`and I would walk ${SERVER_PORT} more`))
}).catch(err => console.log(err))