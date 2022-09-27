
const workers = 8;
const minSalary = 500;
const maxSalary = 2000;
let total;

for (let i = 0; i < workers; i += 1){
  console.log(i);
  const mathRandom = Math.random()*((maxSalary-minSalary)+minSalary)
  console.log(mathRandom);
};