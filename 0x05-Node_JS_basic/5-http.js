const http = require('http');
const process = require('process');
const fs = require('fs');

const app = http.createServer((req, res) => {
  const filePath = process.argv[2] !== undefined ? 'database.csv' : process.argv[2];
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        return (new Error('Cannot load the database'));
      }
      const lines = data.split('\n');
      let numberOfStudents = -1;
      const fields = {};
      lines.forEach((element) => {
        const columns = element.split(',');
        if (element !== '') {
          numberOfStudents += 1;
        }
        if (columns[3] !== 'field' && columns[3] in fields) {
          fields[columns[3]][0] += 1;
          fields[columns[3]].push(columns[0]);
        } else if (columns[3] !== 'field') {
          fields[columns[3]] = [1];
        }
      });
      const output = [];
      output.push('This is the list of our students');
      output.push(`Number of students: ${numberOfStudents}`);
      for (const [key, value] of Object.entries(fields)) {
        const ListOfStudents = value.slice(1).join(', ');
        output.push(`Number of students in ${key}: ${value[0]}. List: ${ListOfStudents}`);
      }
      res.write(output.join('\n'));
      return res.end();
    });
  }
}).listen(1245);
module.exports = app;
