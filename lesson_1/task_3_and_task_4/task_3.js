/*- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
  Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
- Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).*/
let name = prompt("Enter your name");
let surname = prompt("Enter your surname");
let age = prompt("Enter your age");
alert("Вітаю " + name + " " + surname + ". Тобі " + age + " років.");
let information = "Вітаю " + name + " " + surname + ". Тобі " + age + " років.";
document.write(information);