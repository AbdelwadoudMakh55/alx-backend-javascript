export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const empList = [];
  for (const department of Object.entries(employees)) {
    department[1].forEach((emp) => {
      empList.push(emp);
    });
  }
  return empList;
}
