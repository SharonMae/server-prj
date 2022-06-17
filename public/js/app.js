const contactform = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('address');
let message = document.getElementById('message');


contactform.addEventListener('submit', (x) => {
    x.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        address: address.value,
        message: message.value
    }

    let server = new XMLHttpRequest();
    server.open('POST', '/');
    server.setRequestHeader('content-type', 'application/json');
    server.onload = function() {
        console.log(server.responseText);
        if (server.responseText == 'success'){
            alert('Credenziali inviati');
            name.value = '';
            email.value = '';
            address.value = '';
            message.value = '';
        } else {
            alert('Error!');
        }
    }

    server.send(JSON.stringify(formData));
})