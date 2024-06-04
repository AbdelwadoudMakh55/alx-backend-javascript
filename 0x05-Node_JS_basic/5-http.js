const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  const filePath = process.argv[2];
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        res.write('This is the list of our students');
        return res.end();
      }
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
      output.push('This is the list of our students');
      output.push(`Number of students: ${lines.length - 1}`);
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
