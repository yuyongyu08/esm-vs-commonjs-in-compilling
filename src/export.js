import chalk from "chalk";
export const msg = "Hello ES Module!";

export default function printMsg() {
  console.log(chalk.green(msg));
}
