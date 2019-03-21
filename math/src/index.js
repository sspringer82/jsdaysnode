const { rl, wrapper } = require('./rl');

module.exports = async () => {
  let correct = 0;
  let count = 0;
  for (let i = 0; i < 4; i++) {
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
