// 1 урок

// // Шість значень які призводяться до false:
// console.log(Boolean());
// console.log(Boolean(false));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(null));

// // Решта буде true
// console.log(Boolean(1)); // та більше


// Логічний оператор "та"
// &&
//
// Якщо десь зустрінеться false то воно і зупинеться
// Якщо всі умови true, то воно повертає останнє значення
// Якщо два значення false, буде перший false який воно зустріло
// console.log(3 && 2);
// console.log(null && undefined);
// console.log(2 && false);


// Логічний оператор "або"
// ||
// 
// Якщо є true то буде перший true
// Якщо всі значення false то буде виводитися останній false
// console.log(0 || 2);
// console.log(null || undefined);


// Логічний оператор "не"
// !
//
// В boolean значенні перетворює на зворотнє, наприклад:
// true перетворюється на false
// false перетворюється на true
// console.log(!0 && 2);
// console.log(!false && 2);
// console.log("qwerty" && 123 || null && "hello world");
// //            true   та true  false        true
// //            true          або     та
// console.log(123 && undefined || "hello world" && "name");
// //         true та                  true      або
// //                 false     або                  true
// console.log(undefined || false && "hello world" && 123);
// //          false     або      та               та
// //                       false       true          true
// console.log("hello world" || 123 || false && undefined);
// //            true        або    або      та   false
// //                           true   false    

//1) Створіть змінну age яка буде запитувати у користувача його вік
// Створіть змінну isAdmin, яка буде запитувати користувача, чи він admin з підтверженням так або ні.
// Створіть змінну allowedAge і присвойте їй значення 18
// Створіть змінну enterPassword яка буде просити у користувача ввести пароль
// Створіть змінну password і присвойте їй значення рядок qwerty
// Перевірте у користувача чи вік його більший за 18 років, чи він адмін та при введенні пароля обріжте можливі    пробіли та приведіть до нижнього регістру, та виведіть на екран повідомлення "Вітаю, ви можете увійти у систему"
// якщо хоч одне значення хибне виведіть на екран повідомлення "Ви вказали невірні данні"
// const age prompt("enter your age"); 
// const isAdmin confirm("are you an admin?"); 
// const allowedAge = 18; 
// const enterPassword = prompt("enter your password"); 
// const password = "qwerty"; 

// Напиши скрипт який перевіряє можливість розпочати чат з користувачем. Для цього користувач має бути: 
// другом 
// онлайн 
// без режиму не турбувати 
// const isOnline = false; 
// const isFriend = true; 
// const isDisturb = false; 
// console.log(isOnline && isFriend && isDisturb && "Вітаю, ви можете увійти у систему");


// 2 урок

// if (a = a) {  // Умова, яка має призвестись до true
//     // Тіло умови
// }

// const number = Number(prompt("Введіть число"));
// if (number > 0) {
//     console.log(`Число ${number} більше 0`) // Це буде виводитись якщо число number більше нуля
// }

// const number = Number(prompt("Введіть число")) 
// if (number > 18) {
//     console.log(`Ви можете голосувати!`);
// }

// const number = Number(prompt("Введіть число"));
// if (number % 5 === 0) {
//     console.log(`Число ${number} кратне 5`);
// }

// const str = prompt("Введіть рядок");
// if (str.length > 10) {
//     console.log(`У вашому рядку більше 10 символів`);
// }

// const number = Number(prompt("Введіть число"));
// if (number % 2 === 0) {
//     console.log(`Ваше число є чотним`);
// }

// const password = "qwerty";
// const enter = prompt("Введіть пароль");
// if (enter === password) { // Якщо
//     console.log(`Ви ввели правильний пароль!`);
// } else { // Інакше, у нього немає перевірки!
//     console.log(`Ви ввели неправильний пароль!`);
// }

// const number = Number(prompt("Введіть число"));
// if (number > 0) {
//     console.log(`Число більше 0`);
// } else {
//     console.log(`Число менше 0`);
// }

// const age = Number(prompt(`Введіть свій вік`));
// if (age > 100) {
//     console.log(`Ви дуже старі!`);
// } else if (age > 75) { // Інакше якщо, приймає перевірку
//     console.log(`Ви старі!`);
// } else if (age > 50) { // Інакше якщо, приймає перевірку
//     console.log(`Ви підстаркуваті!`);
// } else if (age > 30) { // Інакше якщо, приймає перевірку
//     console.log(`Ви молоді!`);
// } else {
//     console.log(`Юний`);
// }

// const x = Number(prompt("Введіть число по х")); 
// const y = Number(prompt("Пведіть число по у")); 
// if (x>0 && y>0) { 
//     console.log("Перша чверть"); 
// } else if (x<0 && y>0) { 
//     console.log("Друга чверть"); 
// } else if (x<0 && y<0) {
//     console.log("Третя чверть"); 
// } else if (x>0 && y<0) {
//     console.log("4 чверть");
// }

// const x = Number(prompt("Введіть число по х")); 
// const y = Number(prompt("Пведіть число по у")); 
// const op = prompt("Введіть опертаор / * - +");
// if (op === "/") {
//     console.log();

// const age = Number(prompt("Ваш вік")) 
// const result = (age > 18) ? `Ви дорослий, ваш вік ${age}`: `Вам немає 18, ви ввели ${age}`;
// console.log(result);