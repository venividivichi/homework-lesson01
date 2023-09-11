
let userData = prompt('Введіть, будь ласка, вершину піраміди: ')

let rows = parseInt(userData);
 
let elmPyramid = '';
 
for (let r = 1; r <= rows; r++) {
   for (let space = 1; space <= rows - r; space++) {
      elmPyramid += ' ';
   }
 
   for (let num = 1; num <= 2 * r - 1; num++) {
      elmPyramid += '*';
   }
   elmPyramid += '\n';
}

console.log('Ваш результат: \n' + elmPyramid);
