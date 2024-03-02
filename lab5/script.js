function isPrime(x) {
    if (x <= 1) return false;

    for (let divisor = 2; divisor <= Math.sqrt(x); divisor++) {
        if (x % divisor == 0) return false;
    }

    return true;
}

function isComposite(x) {
    if (x <= 1) return false;
    return !isPrime(x);
}

function processCalculation(e) {

    e.preventDefault();

    const arrayInput = document.querySelector('#inputNumber');
    const arrayOutput = document.querySelector('#arrayOutput span');
    const primeOutput = document.querySelector('#primeOutput span');
    const compositeOutput = document.querySelector('#compositeOutput span');
    const neitherOutput = document.querySelector('#neitherOutput span');

    const rawInput = arrayInput.value.split(',');
    const array = rawInput.map(num => {
        const parsed = parseInt(num.trim(), 10);
        return isNaN(parsed) ? null : parsed;
    });

    if (array.includes(null)) {
        arrayOutput.innerText = "Error - Input contains non-numeric values";
        primeOutput.innerText = "";
        compositeOutput.innerText = "";
        neitherOutput.innerText = "";
        return;
    }

    let primeCount = 0;
    let compositeCount = 0;
    let neitherCount = 0;

    array.forEach(num => {
        if (isPrime(num)) {
            primeCount++;
        }
    });

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (isComposite(element)) {
            compositeCount++;
        } else if (! isPrime(element)) {
            neitherCount++;
        }
    }

    primeOutput.innerText = primeCount.toString();
    compositeOutput.innerText = compositeCount.toString();
    neitherOutput.innerText = neitherCount.toString();
    arrayOutput.innerText = '[' + array.join(', ') + ']';
}

document.querySelector("#calcBtn").addEventListener("click", processCalculation);
