const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  let files = []
  fs.readdir('public/PUT_VIDEOS_IN_HERE', (err, x) => {
    files = x
    res.status(200).send(files)
  })
})

app.listen(1338, () => console.log('http://localhost:1338'))
