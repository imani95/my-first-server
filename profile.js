/ getting our libraries
const express = require('express')
const cors = require('cors')

const imanisProfile = {
  firstName: 'imani',
  lastName: "s",
  preferences: {
    foods: ["spinach", "apples"],
    colour: 'pink',
    number: 16
  },
  hoursofSleep: 7 
  musician: 'beyonce',
  lifestyle: 'crazy'
}

const db = {
  profiles: {
    1000: imanisProfile,
  },
  books: {
    0: {
      title: 'well read black girl',
      author: 'someone'
    }
  }
}

const app = express()
app.use(cors())
app.use(express.json()) // for parsing application/json


// GET /profiles
app.get('/profiles', (req, res) => {
  res.json({
    status: 'success',
    data: db.profiles
  })
})

// POST /profiles
app.post('/profiles', (req, res) => {

  // find the largest key and increment it
  const existingIds = Object.keys(db.profiles)
  const largestKey = Math.max(...existingIds)

  const newKey = largestKey + 1

  db.profiles[newKey] = req.body

  res.json({
    status: 'success',
    message: `Created a profile with id of ${newKey}`
  })
})

app.get('/profiles/:userId', (req, res) => {
  console.log(req.params.userId)

  const matchingProfile = db.profiles[req.params.userId]

  if (matchingProfile) {
    res.json({
      status: 'success',
      data: matchingProfile
    })
  } else {
    res.json({
      message: "Couldn't find user with that id"
    })
  }
  
})

// app.get('/profiles/1000', (req, res) => {
//   const matchingProfile = db.profiles[1000]

//   res.json({
//     status: 'success',
//     data: matchingProfile
//   })
// })

// app.get('/profiles/1001', (req, res) => {
//   const matchingProfile = db.profiles[1001]

//   res.json({
//     status: 'success',
//     data: matchingProfile
//   })
// })


app.listen(4000, () => {
  console.log('server is running!')
})

// app.listen(4000, () => {
    // console.log('MY CUSTOM SERVER START MESSAGE')