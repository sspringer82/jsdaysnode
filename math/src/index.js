const { rl, wrapper } = require('./rl');

const program = require('./getNoOfTasks')();

module.exports = async () => {
  let count = 0;
  let correct = 0;

  for (let i = 0; i < program.count; i++) {
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
