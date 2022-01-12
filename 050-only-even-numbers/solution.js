document
    .getElementById('button')
    .addEventListener('click', () => {
        // add code here

        const n = prompt('Please enter a number');
        let parsedFloat = parseFloat(n);

        if (isNaN(parsedFloat)) {
            alert('Invalid number!');
            return;
        }

        if (parsedFloat % 1 !== 0) {
            alert('Decimals not allowed');
            return;
        }

        if (parsedFloat <= 0) {
            alert('Only numbers greater than 0 allowed');
            return;
        }

        parsedFloat = Math.min(100, parsedFloat);

        const numberArray = [];

        for (let i = 1; i <= parsedFloat; i++) {
            if (i % 2 === 0) {
                numberArray.push(i * i);
            }
        }

        document.getElementById('output').innerHTML = numberArray.join('<br>');

        //console.log(numberOutput);
        //document.getElementById('output').innerHTML = numberOutput;
    });
