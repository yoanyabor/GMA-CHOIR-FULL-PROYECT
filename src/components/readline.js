const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter some input: ", (input) => {
  console.log(`Received: ${input}`);
  rl.close();
});
