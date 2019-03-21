import { greet } from './module';
import { createServer } from 'http';

const myName: string = 'Basti';

const greeting = greet(myName);

console.log(greeting);

createServer((req: any, res: any) => {
  res.end('foo');
}).listen(8080);
