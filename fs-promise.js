const fs = require("fs/promises");

const readFile = async () => {
  try {
    const data = await fs.readFile("./file.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const writeFile = async () => {
  try {
    await fs.writeFile("./hello-world.txt", "Hello World!");
    console.log("success");
  } catch (error) {
    console.log("error");
  }
};

readFile();
writeFile();
