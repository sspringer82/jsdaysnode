var program = require('commander');

module.exports = () => {
  program
    .version('0.1.0')
    .option('-c, --count <n>', 'number of tasks', v => {
      const value = parseInt(v, 10);
      return value > 0 ? value : 4;
    })
    .parse(process.argv);
  return program;
};
