console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data.toString().trim()}`);
  process.exit(0);
});
process.on('exit', () => {
  console.log('This important software is now closing');
});
