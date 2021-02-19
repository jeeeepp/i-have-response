import http = require('http');

http.createServer(function (req, res) {
  switch (req.url) {
    case ("/json-please"):
      var json = {
        "simpleText": "Hello, I'm json response. (￣▽￣)ノ",
        "simpleObject": {
          "name": "I'm basic object. ( ͡° ͜ʖ ͡°)"
        },
        "simpleArray": [
          "array 1. (⌐■_■)",
          "array 2. ヾ(・ω・`)ノヾ(´・ω・)ノ゛"
        ]
      }

      res.writeHead(200, {"Content-Type": "application/json"})
      res.write(JSON.stringify(json))
      res.end()
      break;
    
    case ("/"):
      res.writeHead(200, {"Content-Type": "text"})
      res.write("I'm on. ヾ(＾∇＾)\nTo call json use '/json-please'")
      res.end()
      break;
  }
}).listen(80)

console.log("Server started.")