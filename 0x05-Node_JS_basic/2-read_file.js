const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' });
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
        fields[columns[3]].push(columns[0]);
      }
    });
    console.log(`Number of students: ${numberOfStudents}`);
    for (const [key, value] of Object.entries(fields)) {
      const ListOfStudents = value.slice(1).join(', ');
      const out = `Number of students in ${key}: ${value[0]}. List: ${ListOfStudents}`;
      console.log(out);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
