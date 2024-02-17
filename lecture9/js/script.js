function inFocus(temp) {
    temp.classList.add('active');
}

function outFocus(temp) {
    temp.classList.remove('active');
}

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');

firstName.addEventListener('focus', function() {inFocus(firstName)}, false);
lastName.addEventListener('focus', function() {inFocus(lastName)}, false);
firstName.addEventListener('blur', function() {outFocus(firstName)}, false);
lastName.addEventListener('blur', function() {outFocus(lastName)}, false);

const validations = [
    {
        'element': document.getElementById('firstName'),
        'error': document.getElementById('error-firstName'),
        'msg': 'Please enter valid first name.',
        'regex': /^[a-zA-Z]+( [a-zA-Z]+)?$/
    },
    {
        'element': document.getElementById('lastName'),
        'error': document.getElementById('error-lastName'),
        'msg': 'Please enter valid last name.',
        'regex': /^[a-zA-Z]+(['-][a-zA-Z]+)?$/
    },
    {
        'element': document.getElementById('email'),
        'error': document.getElementById('error-email'),
        'msg': 'Please enter valid email.',
        'regex': /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/
    },
    {
        'element': document.getElementById('password'),
        'error': document.getElementById('error-password'),
        'msg': 'Please enter valid password.',
        'regex': /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{}|\\[\]:;\"'<>,.?\/]).{8,}$/
    },
]

function validate(e) {

    let valid = true;
    validations.forEach(element => {
        element.error.innerText = "";
        if (!element.regex.test(element.element.value)) {
            element.error.innerText = element.msg;
            valid = false;
        }
    });

    if (valid) {
        alert('The form is successfully submitted');
    } else {
        alert('There are some errors in your form submission')
        e.preventDefault();
    }
}

document.getElementById('register').addEventListener('submit', validate, false);

