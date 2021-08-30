const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("/.db")

// middleware
app.use(cors())
// this line is giving us access to req.body()
app.use(express.json())

// ROUTES //

// Create a todo

// Get all todo

// Get a todo

// Update a todo

// Delete a todo

app.listen(5000, () => {
  console.log("Server has started on port 5000")
})
