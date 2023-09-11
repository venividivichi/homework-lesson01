
let a = prompt("Введіть, будь ласка, число: ");
let n = parseInt(a);

console.log('Діапазон від 1 до ' + n + ' має такі досконалі числа: ');

        for (let i = 1; i <= n; i++) {         
        sumDiv = 0;
            for (let j = 1; j <= i/2; j++) {
                if (i % j === 0) { 
                    sumDiv = sumDiv + j;   
                }
            } 
        if (i === sumDiv) {
            console.log('Досконале число - ' + i);
        }
        
}