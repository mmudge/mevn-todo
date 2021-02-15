const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}

app.get('/', cors(corsOptions), (req, res) => {
  res.send("Hello world!")
})

app.listen(port, () => {
  console.log(`Express server running on ${port}`)
})
