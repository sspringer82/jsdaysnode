const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function wrapper(a, b) {
  // const question = a + ' + ' + b + ' = ';
  const question = `${a} + ${b} = `;
  return new Promise((resolve, reject) => {
    rl.question(question, answer => {
      if (a + b === parseInt(answer, 10)) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

module.exports = { rl, wrapper };
