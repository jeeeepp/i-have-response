import { stringify } from "querystring"

var express = require('express')
var app = express()
const port = 3000

app.use(express.json())

app.get("/",(req: any, res: any) => {
  var manual: String = `
    GET: /text \n
    POST: /text {"message": "YOUR_MESSAGE"}
  `
  res.end(manual)
})

app.get("/text",(req: any, res: any) => {
  res.end("Hello world")
})

app.post("/text",(req: any, res: any) => {
  var reqBody = req.body
  var responseMessage = `We got your message: ${reqBody.message}`

  res.end(responseMessage)
})


app.listen(port, () => {
  console.log(`App run at: ${port}`)
})