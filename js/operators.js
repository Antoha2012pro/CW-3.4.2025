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
console.log(3 && 2);
console.log(null && undefined);
console.log(2 && false);


// Логічний оператор "або"
// ||
// 
// Якщо є true то буде перший true
// Якщо всі значення false то буде виводитися останній false
console.log(0 || 2);
console.log(null || undefined);


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
const isOnline = false; 
const isFriend = true; 
const isDisturb = false; 
console.log(isOnline && isFriend && isDisturb && "Вітаю, ви можете увійти у систему");