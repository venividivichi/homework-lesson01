
let a = prompt("Введіть, будь ласка, число: ");
let n = parseInt(a);

let isSimpleNumber = true;

    if (n === 1 || n === 0) {
        isPrime = false;
    } else {
        for (let i = 2; i < n; i++) { 
            if (n % i === 0) { 
                isSimpleNumber = false; 
                break; 
            }
        } 
    }

    if (isSimpleNumber) {
        console.log("Число просте");
    } else {
        console.log("Число не просте");
    }

