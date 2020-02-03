import http = require('http');

http.createServer(function (req, res) {
  switch (req.url) {
    case ("/json-please"):
      var json = {
        "simple-text": "Hello, I'm json response. (￣▽￣)ノ",
        "simple-object": {
          "name": "I'm basic object. ( ͡° ͜ʖ ͡°)"
        },
        "simple-array": [
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
      res.write("I'm on. ヾ(＾∇＾)")
      res.end()
      break;
  }
}).listen(80)

console.log("Server started.")