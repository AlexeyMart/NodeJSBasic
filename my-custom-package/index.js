import { upperCase } from "upper-case";

export const greet = (name) => {
  console.log(upperCase(`Hello ${name}, welcome to NodeJS`));
};

greet("Alex");
