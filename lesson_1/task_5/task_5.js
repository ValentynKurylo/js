//- За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
let num_1 = prompt("Enter number");
let num_2 = prompt("Enter number");
let num_3 = prompt("Enter number");
let num = num_1 +num_2 + num_3;
num = Number.parseInt(num, 10);
console.log(num);
