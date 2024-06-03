const fs = require("fs");

function countStudents (path) {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    lines = data.split("\n");
    let numberOfStudents = -1;
    let fields = {};
    lines.forEach(element => {
      columns = element.split(",");
      if (element !== "") {
        numberOfStudents++;
      }
      if (columns[3] !== 'field' && columns[3] in fields) {
        fields[columns[3]][0]++;
        fields[columns[3]].push(columns[0]);
      } else if (columns[3] !== 'field') {
        fields[columns[3]] = [1];
        fields[columns[3]].push(columns[0]);
      }
    });
    console.log(`Number of students: ${numberOfStudents}`);
    for (const [key, value] of Object.entries(fields)) {
      ListOfStudents = value.slice(1).join(", ");
      out = `Number of students in ${key}: ${value[0]}. List: ${ListOfStudents}`;
      console.log(out);
    }
  });
}
module.exports = countStudents;
