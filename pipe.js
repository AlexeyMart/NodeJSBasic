const fs = require("fs");
const zlib = require("zlib");

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2, // 2 bytes instead of 64
});

readableStream.pipe(gzip).pipe(fs.WriteStream("./pipe.txt.gz"));

const writeableStream = fs.createWriteStream("./stream.txt");

readableStream.pipe(writeableStream);
