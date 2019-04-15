// Data Section

let QuoteFragments =
    [
        ["Marvelous objects disappear","Love never dies", "Money comes by"],
        ["within an hour", "easily and with care", "when you don't want it"],
        [", that's why you need all of it.",", consider yourself prepared for it."," so stay calm and watch."]
    ];

// Logic Section

// Function randomNumber generates random number for a chosen inner array
function randomNumber(array, number) {
    return Math.floor(Math.random() * ((array[number].length - 1) + 1));
}

// This function uses randomNumber to select different parts of sentence and then concatenates them together
function createQuote(array) {
    let randomQuote = "";

    for (let i = 0; i < array.length; i++) {
        randomQuote += array[i][randomNumber(array,i)];
        if (i === 0) {
            randomQuote += " ";
        }
    }
    console.log(randomQuote);
    return randomQuote;
}

createQuote(QuoteFragments);
createQuote(QuoteFragments);
createQuote(QuoteFragments);