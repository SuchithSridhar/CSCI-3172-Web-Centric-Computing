document.querySelector('section#question-1 select').addEventListener('change', function() {
    const section = document.getElementById('question-1');

    // remove any existing colors
    section.classList.remove(
        'bg-red', 'bg-green', 'bg-blue', 'bg-yellow', 'bg-pink', 'bg-orange',
        'bg-purple'
    );
    
    const selectedDay = this.value;
    let colorClass = '';

    switch (selectedDay) {
        case 'monday':
            colorClass = 'bg-red';
            break;
        case 'tuesday':
            colorClass = 'bg-green';
            break;
        case 'wednesday':
            colorClass = 'bg-blue';
            break;
        case 'thursday':
            colorClass = 'bg-yellow';
            break;
        case 'friday':
            colorClass = 'bg-pink';
            break;
        case 'saturday':
            colorClass = 'bg-orange';
            break;
        case 'sunday':
            colorClass = 'bg-purple';
            break;
    }

    if (colorClass) {
        section.classList.add(colorClass);
    }
});

document.getElementById('numberForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputNumber = parseInt(document.getElementById('inputNumber').value);
    const resultElement = document.getElementById('result');

    // Check if number is even or odd
    let message = `The number entered is ${inputNumber % 2 === 0 ? 'an even' : 'an odd'}`;

    // Check if the number is prime
    let isPrime = true;
    if (inputNumber <= 1) isPrime = false;
    else {
        for (let i = 2; i <= Math.sqrt(inputNumber); i++) {
            if (inputNumber % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    message += ` ${isPrime ? 'prime' : 'composite'} number`;

    // Check the range of the number
    if (inputNumber <= 50) message += ' less than or equal to 50';
    else if (inputNumber > 50 && inputNumber <= 75) message += ' greater than 50 and less than or equal to 75';
    else if (inputNumber > 75 && inputNumber <= 100) message += ' greater than 75 and less than 100';
    else if (inputNumber > 100) message += ' greater than 100';

    resultElement.textContent = message + '.';
});
