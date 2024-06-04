console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', (data) => {
  input = data;
  if (process.stdin.isTTY) {
    console.log(`Your name is: ${input.trim()}`);
    process.stdin.pause();
  }
});

process.stdin.on('end', () => {
  if (!process.stdin.isTTY) {
    console.log(`Your name is: ${input.trim()}`);
    console.log('This important software is now closing');
  }
});
