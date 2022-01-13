const outputContainer = document.getElementById('output');

const maxTries = 10;

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

document
    .getElementById('button')
    .addEventListener('click', () => {
        // 1. get random number between 0 and 100
        const n = getRandomNumber();

        // 2. ask user for input
        let input = '';
        const stats = [];
        outputContainer.innerHTML = '';
        let loopCounter = 0;

        while (input !== String(n)) {
            input = prompt('Guess a number please!');
            stats.push(input);

            const numberInput = parseInt(input);

            if (isNaN(numberInput)) {
                alert('Not a number!');
            } else if (numberInput < n) {
                alert('Number is too small');
            } else if (numberInput > n) {
                alert('Number is too big');
            } else {
                alert('Winner! The number was ' + n);
                break;
            }

            loopCounter += 1;

            if (loopCounter >= maxTries) {
                alert('Too many tries. Exiting game! You lost.');
                break;
            }
        }

        let outputText = '';

        for (let i = 0; i < stats.length; i++) {
            outputText += (i + 1) + ') ' + stats[i] + '<br>';
        }

        outputText += `Total guesses needed: ${stats.length}`;

        outputContainer.innerHTML = outputText;
    });
