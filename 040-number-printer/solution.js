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

        // if (parsedFloat > 100) {
        //     parsedFloat = 100;
        // }

        parsedFloat = Math.min(100, parsedFloat);


        console.log('All ok', parsedFloat);

        //let numberOutput = '';
        const numberArray = [];

        for (let i = 1; i <= parsedFloat; i++) {
            //numberOutput = numberOutput + i + '<br>';
            numberArray.push(i);
        }

        document.getElementById('output').innerHTML = numberArray.join('<br>');

        //console.log(numberOutput);
        //document.getElementById('output').innerHTML = numberOutput;
    });
