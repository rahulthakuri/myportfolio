document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if(name && email && message) {
        alert('Thank you for your message, ' + name + '!');
    } else {
        alert('Please fill out all fields.');
    }
});
