
// Task 1

let a = prompt('Введіть, будь ласка, число \n(для прикладу - 30):')
console.log('Це число: ' + a);
let number = parseInt(a);

if (number <= 0 ) {
    console.log('Введіть, будь ласка, число більше 0!');
} else if (number % 3 === 0 && number % 5 === 0) {
    console.log('Отже це - FizzBuzz');
} else if (number % 3 === 0 ) {
    console.log('Отже це - Fizz');
} else if (number % 5 === 0 ) {
    console.log('Отже це - Buzz');
} 
else {
    console.log('Ваше число не ділиться на 3 та 9!');
}

// Task 2

// let a = prompt('Введіть, будь ласка, рік \n(для прикладу - 1992):')
// let year = parseInt(a);

// if (year % 100 === 0 && year % 400 === 0) {     
//     console.log(year + ' - це високосний рік!');
// } else if (year % 4 === 0 && year % 100 !== 0) {
//     console.log(year + ' - це високосний рік!');
// } else {
//     console.log(year + ' - на жаль, це не високосний рік!');
// }

// Task 3

// let a = prompt('Введіть, будь ласка, число \n(для прикладу - 30):')
// console.log('Це число : ' + a);
// let age = parseInt(a);

// if (age != 11 && age % 10 === 1) {
//     console.log('Вам ' + age + ' рік');
// } else if (age == 11 || age == 12 || age == 13 || age == 14) {
//     console.log('Вам ' + age + ' років');
// } else if (age % 10 === 2 || age % 10 === 3 || age % 10 === 4) {
//     console.log('Вам ' + age + ' роки');
// } else if (age % 10 === 0 || age % 10 === 5 || age % 10 === 6 || age % 10 === 7 || age % 10 === 8 || age % 10 === 9) {
//     console.log('Вам ' + age + ' років');
// } else if (age < 0) {
//     alert('Вік не може бути від\'ємним');
// } else {
//     console.log('Чудово');
// }