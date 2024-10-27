// instructions
// At this checkpoint, you are asked to write an algorithm that read a sentence, which ends with a point, character by character, and to determine:

// Instructions

// The length of the sentence (the number of characters).
// The number of words in the sentence (assuming that the words are separated by a single space).
// The number of vowels in the sentence.
// You have to keep in mind that: 

// Each character will be treated separately.
// The last character is the point.
// Use three variables as counters.



// function one, counting the characters in a sentence.
const Counter = (sentence) => {

    let char = sentence.split('');
    let words = sentence.trim().split(/\s+/).filter(word => word.length > 0);
    let vowels = 'aeiou'

    // function to count characters.
    function countChars () {

    let charCounter = 0;    

    for(let i = 0; i < char.length; i++) {
        charCounter++
    }
    return charCounter;
    }


    // function to count words.
    function countWords() {

    
        let wordCount = words.length;
    
        return wordCount;
    }


    // function to count vowels
    function countVowels () {
        let vowelCounter = 0;

    for (let i = 0; i < char.length; i++) {

        if (vowels.includes(sentence[i].toLowerCase())) {
            vowelCounter++; 
        }
    }

    return vowelCounter;
    }

    countChars()
    countWords()
    countVowels()

    console.log( `the number of characters is ${charCounter} and the words are ${wordCount}, there are ${vowelCounter} vowels in the sentence.`)
}

