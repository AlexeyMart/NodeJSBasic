const fs = require("fs");

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2, // 2 bytes instead of 64
});

const writeableStream = fs.createWriteStream("./stream.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writeableStream.write(chunk);
});
