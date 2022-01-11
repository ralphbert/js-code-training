// do not touch!
button.addEventListener('click', () => {
    validate();
});

function validate() {
    const output = document.getElementById('output');

    if (output.innerText !== 'Hello World!') {
        alert('Wrong or no text written to the div! Make sure to write "Hello World!" to it');
    }
}
