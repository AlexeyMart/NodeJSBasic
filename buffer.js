const buffer = new Buffer.from("Aleksei", "utf-8");

console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());

buffer.write("Code");
console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());
