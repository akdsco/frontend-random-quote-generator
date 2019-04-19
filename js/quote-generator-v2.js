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
        [" is directly proportional to the cost of the item." , " breeds new problems." , " is inversely proportional to its importance.", " will always land where it can do the most damage."]
    ];

let authors = ["Mark Twain","Andy Warhol","Michael Jackson","Joe Smith","Joseph Lang","Old Chinese Saying","Anonymous"];

// Logic Section

// Function randomNumber generates random number for a chosen inner array or
// for a one dimensional array if only array parameter is supplied
function randomNumber(array, number) {

    if (typeof number !== "undefined") {
        return Math.floor(Math.random() * ((array[number].length - 1) + 1));
    } else {
        return Math.floor(Math.random() * ((array.length) - 1) + 1);
    }
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
    return randomQuote;
}

// This function selects array that corresponds with supplied type
function generateQuotes(type) {
    let arrayType;

    switch (type) {
        case "life":
            arrayType = lifeQuoteSentences;
            break;
        case "laws":
            arrayType = lawsQuoteSentences;
            break;
    }
    return createQuote(arrayType);
}

// Access HTML and change elements according to actions taken on website

function generateContent() {

    // erase existing quotes
    let quotesNode = document.getElementById("quotes");
    while (quotesNode.firstChild) {
        quotesNode.removeChild(quotesNode.firstChild);
    }

    // save user input
    let type = document.getElementById("inputQuoteType").value;
    let amount = document.getElementById("inputQuantity").value;

    // generate content on website
    for (let i = 0; i < amount; i++) {

        //generate random quote
        let pNode = document.createElement("BLOCKQUOTE");          // Create a <BLOCKQUOTE> node
        let textNode = document.createTextNode(generateQuotes(type));       // Create a text node
        pNode.appendChild(textNode);                                        // Append the text to <P>
        document.getElementById("quotes").appendChild(pNode);     // Append BLOCKQUOTE to parent element

        //generate random author - similar as above
        let authorNode = document.createElement("P");
        let authorName = document.createTextNode("- " + authors[randomNumber(authors)]);
        authorNode.appendChild(authorName);
        document.getElementById("quotes").appendChild(authorNode);
    }
}