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

let randomNumber = 0;

function randomize(array, number) {
    randomNumber = Math.floor(Math.random() * ((array[number].length - 1) + 1));
    return randomNumber;
}

function createSentence(array) {
    let result = "";

    for (let i = 0; i < array.length; i++) {
        result += array[i][randomize(array,i)];
        if (i === 0) {
            result += " ";
        }
    }
    console.log(result);
    return result;
}

