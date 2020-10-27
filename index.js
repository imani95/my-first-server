// Code from external libraries
const express = require('express')
const cors = require('cors')

// setup for Express
const app = express()
app.use(cors())

const imani = { 
  firstName: 'imani',
  lastName: 'steele',
}
// routes (include a banana route)

app.get('/', (req, res) => {
  res.json({ message: 'bananagrams' })
})

app.get('/portfolio', (req, res) => {
  res.json(imani)
})
// code to start the server

app.listen(3000, () => {
  console.log('MY CUSTOM SERVER START MESSAGE')
})