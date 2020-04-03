const express = require("express")

const PORT = 8080
const app = express()

app.get("/_api/", (req, res) => res.send("hallo"))
app.use("/", express.static("public"))

const server = app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`)
})

module.exports = server
