const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
// mongodb+srv://TK:Tuka1803@todo.ln8utfd.mongodb.net/test
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect('mongodb+srv://TK:Tuka1803@todo.ln8utfd.mongodb.net/test');
const db=mongoose.connection
db.on('error',console.error.bind(console,'connection error'))
db.once('open', ()=>{
  console.log("connect successfully")
})