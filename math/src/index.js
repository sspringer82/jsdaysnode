const { rl, wrapper } = require('./rl');

const opt = process.argv[2];
const c = process.argv[3];

module.exports = async () => {
  let correct = 0;
  let count = 0;

  let numberOfTasks = 4;
  if (opt === '-c' && c) {
    numberOfTasks = parseInt(c, 10);
  }

  for (let i = 0; i < numberOfTasks; i++) {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const result = await wrapper(a, b);
    count++;
    if (result) {
      correct++;
    }
  }
  rl.close();
  console.log('correct ' + correct + ' of ' + count);
};
