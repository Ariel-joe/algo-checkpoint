function processSentence() {
    let charCount = 0;
    let wordCount = 1; // Starts at 1 assuming at least one word
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";

    // Get input from the user
    let sentence = prompt("Enter a sentence ending with a period ('.'):");

    // Iterate through each character in the sentence
    for (let char of sentence) {
        charCount++; // Count characters

        if (vowels.includes(char)) {
            vowelCount++; // Count vowels
        }

        if (char === " ") {
            wordCount++; // Count words
        }

        if (char === ".") {
            break; // Stop processing at the period
        }
    }

    // Display the results
    console.log("Sentence Length:", charCount);
    console.log("Number of Words:", wordCount);
    console.log("Number of Vowels:", vowelCount);
}

// Call the function
processSentence();
