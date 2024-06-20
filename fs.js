const fs = require("fs");

// sync
const fileContents = fs.readFileSync("./file.txt", "utf-8").replace(/\n/g, " ");
console.log(fileContents);

// async
fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data.replace(/\n/g, " "));
  }
});

fs.writeFileSync("./hello-world.txt", "Hello World");
fs.writeFile(
  "./hello-world.txt",
  "\nHello World async",
  { flag: "a" },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("the file was updated");
    }
  }
);
