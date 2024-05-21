const path = require("path");

console.log(__filename);
console.log(__dirname);

// last part
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

// extension
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

// parse, format, isAbsolute filename
console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));
console.log(path.isAbsolute(__filename));

// join
console.log(path.join("/folder1", "folder2", "index.html"));
console.log(path.join(__dirname, "data.json"));

// resolve
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve(__dirname, "data.json"));
