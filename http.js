const http = require("http");
const fs = require("fs");

const server = http.createServer((_request, response) => {
  //   TEXT response
  //   response.writeHead(200, { "Content-Type": "text/plain" });
  //   response.end("Hello world!");

  // JSON response
  //   response.writeHead(200, { "Content-Type": "application/json" });
  //   response.end(
  //     JSON.stringify({
  //       id: 10,
  //       email: "example@example.com",
  //     })
  //   );

  //   HTML Response
  response.writeHead(200, { "Content-Type": "text/html" });
  // for large files
  //   fs.createReadStream(__dirname + "/index.html").pipe(response);
  const html = fs.readFileSync(__dirname + "/index.html", "utf-8");
  response.end(html);
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
