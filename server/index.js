const express = require("express")
const app = express()
const cors = require("cors")

// middleware
app.use(cors())
// this line is giving us access to req.body()
app.use(express.json())

app.listen(5000, () => {
  console.log("Server has started on port 5000")
})
