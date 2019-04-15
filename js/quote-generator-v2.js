// Data Section

let lifeQuoteSentences =
    [
        ["Marvelous objects disappear","Love never dies", "Money comes by"],
        ["within an hour", "easily and with care", "when you don't want it"],
        [", that's why you need all of it.",", consider yourself prepared for it."," so stay calm and watch."]
    ];

let lawsQuoteSentences =
    [
        ["Gold's Law:" , "Weinberg's Second Law:" , "Murphy's Fail Law:", "Visionary Law:"],
        ["Often expressed as a relative priority" , "Every solution", "The legibility of a copy", "A falling object"],
        [" is directly proportional to the cost of the item." , " breeds new problems." , " is inversely proportional to its importance.", "will always land where it can do the most damage."]
    ];

// Logic Section

// Function randomNumber generates random number for a chosen inner array
function randomNumber(array, number) {
    return Math.floor(Math.random() * ((array[number].length - 1) + 1));
}

// This function uses randomNumber to select different parts of sentence,
// concatenates them together and returns a random quote

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

// This function allows to select the type of quote as well as how many
// different random quotes should be generated
function generateQuotes(type, amount) {
    let arrayType;

    switch (type) {
        case "life":
            arrayType = lifeQuoteSentences;
            break;
        case "laws":
            arrayType = lawsQuoteSentences;
            break;
    }

    for (let i = 0; i < amount; i++) {
        createQuote(arrayType);
    }
}

generateQuotes("laws",2);


// Access HTML and change elements according to actions taken on website

