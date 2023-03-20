function reverseWords(sentence) {
    // Your code will replace the placeholder return statement.
    sentence = sentence.trim();
    let stack = [], word = '', previousChar = '';
    for (let i = 0; i < sentence.length; i++){
        let currentChar = sentence[i];
        if (currentChar === ' ') {
            if (previousChar !== ' ') {
                stack.push(word);
                word = '';
            }
        } else {
            word += currentChar;            
        }

        if (i === sentence.length - 1) {
            stack.push(word);
        }
        previousChar = currentChar;
    }
    let reverseSentence = '';
    while(stack.length){
        let currentWord = stack.pop();
        reverseSentence += currentWord;
        if (stack.length !== 0) {
            reverseSentence += " ";
        }
    }
    return reverseSentence;
}