const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  //   const method = request.method // GET POST PUT DELETE
  const url = request.url;

  // TEXT response
  if (url === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello world!");
    return;
  }

  // JSON response
  if (url === "/api") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(
      JSON.stringify({
        id: 10,
        email: "example@example.com",
      })
    );
    return;
  }

  // HTML Response
  if (url === "/about") {
    response.writeHead(200, { "Content-Type": "text/html" });
    // for large files
    // fs.createReadStream(__dirname + "/index.html").pipe(response);
    const userName = "Some user name";
    let html = fs.readFileSync(__dirname + "/index.html", "utf-8");
    html = html.replace("{{userName}}", userName);
    response.end(html);
    return;
  }

  // Not found
  response.writeHead(404);
  response.end("Page not found");
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
