interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const s1: Student = {
  firstName: 'Abdelwadoud',
  lastName: 'Makhlok',
  age: 21,
  location: 'Morocco',
}
const s2: Student = {
  firstName: 'Mohamed',
  lastName: 'Ahmed',
  age: 25,
  location: 'Morocco',
}

const studentsList: Student[] = [s1, s2];

let table: string = '<table>';
table += '<tr><th>firstName</th><th>location</th></tr>';
studentsList.forEach(item => {
  table += `<tr><td>${item.firstName}</td><td>${item.location}</td></tr>`;
});
const bodyElement = document.body;
bodyElement.innerHTML = table;
