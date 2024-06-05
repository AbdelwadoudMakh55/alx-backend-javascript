const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line !== '');
        const fields = {};
        lines.slice(1).forEach((element) => {
          const columns = element.split(',');
          if (columns[3] in fields) {
            fields[columns[3]][0] += 1;
            fields[columns[3]].push(columns[0]);
          } else {
            fields[columns[3]] = [1];
            fields[columns[3]].push(columns[0]);
          }
        });
        const output = [];
        output.push(`Number of students: ${lines.length - 1}`);
        for (const [key, value] of Object.entries(fields)) {
          const ListOfStudents = value.slice(1).join(', ');
          const out = `Number of students in ${key}: ${value[0]}. List: ${ListOfStudents}`;
          output.push(out);
        }
        resolve(output.join('\n'));
      }
    });
  });
}

const app = http.createServer((req, res) => {
  const filePath = process.argv[2];
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(filePath)
      .then((output) => {
        res.end(`This is the list of our students\n${output}`);
      })
      .catch(() => {
        res.end('This is the list of our students\n');
      });
  }
}).listen(1245);
module.exports = app;
