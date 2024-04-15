/*eslint-disable*/
export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((item) => item.location === city);
  return studentsInCity.map((item) => {
    const ListStudents = newGrades.filter((student) => student.studentId === item.id);
    if (ListStudents.length === 0) {
      item.grade = 'N/A';
      return item;
    }
    item.grade = ListStudents[0].grade;
    return item;
  });
}
