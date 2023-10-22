import chalk from "chalk";
const msg = "Hello CommonJS!";

function printMsg() {
  console.log(chalk.green(msg));
}

module.exports = { printMsg };
