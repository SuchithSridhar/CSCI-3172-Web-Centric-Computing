function displayFormData(formData) {
    const resultFirstname = document.querySelector('#form-output #result-firstname');
    const resultLastname = document.querySelector('#form-output #result-lastname');
    const resultGender = document.querySelector('#form-output #result-gender');
    const resultCountry = document.querySelector('#form-output #result-country');

    resultFirstname.innerText = formData.firstname;
    resultLastname.innerText = formData.lastname;
    resultGender.innerText = formData.gender;
    resultCountry.innerText = formData.country;

    const formOutput = document.querySelector('#form-output');
    formOutput.classList.remove('d-none');
}

function onFormSubmit(event) {
    /**
     * Question (a)
     * preventDefault prevents the default behaviour of the form, which is to
     * perform a GET/POST method on the specified action page. This way, we can
     * prevent our web page from reloading and use javascript to just update the
     * HTML directly.
     */
    event.preventDefault();

    /**
     * Question (b)
     * Firstly, I understand this question to be asking: What changes would be
     * required to ensure that previously submitted data remains on the page,
     * rather than being replaced.
     *
     * To do that, we can do one of few things:
     *
     * 1. Store the data in an array: This will ensure the data is stored each
     * time the user submits the form but the data will be lost if they refresh
     * the page.
     *
     * 2. Store the data in a local storage: This will ensure the data is stored
     * on the browser the user is using but isn't stored on the server.
     *
     * 3. Perform a call to a back-end service to store the data in a database.
     * This can be either an entire back-end server or just a database like
     * firebase.
     *
     * 4. We can append to the existing HTML rather than replacing it. This way,
     * we will be appending to the displayed data rather than replacing it.
     *
     * Ex: formData.firstname += document.getElementById('firstname').value + "<br>";
     */

    formData = {};
    formData.firstname = document.getElementById('firstname').value;
    formData.lastname = document.getElementById('lastname').value;
    formData.gender = "";
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    for (const input of genderInputs) {
        if (input.checked) {
            formData.gender = input.value;
            break;
        }
    }
    formData.country = document.getElementById('country').value;

    displayFormData(formData);
}

const form = document.querySelector('form');
form.addEventListener('submit', onFormSubmit);
