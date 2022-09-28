
const employees = 7;
const minSalary = 100;
const maxSalary = 800;
let totalSalary = 0;

for (let i = 1; i <= employees; i += 1){
  console.log(`Работник: ${i}`);
  const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
  // console.log(salary);
  totalSalary+=salary
}

console.log(`Общая зарплата всех сотрудников: ${totalSalary}`);