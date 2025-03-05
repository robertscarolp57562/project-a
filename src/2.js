// Function to generate a random number between 1 and 20
function getRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

// Function to generate a random color
function getRandomColor() {
  const colors = ['red', 'blue', 'green', 'yellow'];
  return colors[getRandomNumber()];
}

// Function to generate a random word
function getRandomWord() {
  const words = ['apple', 'banana', 'cherry', 'orange'];
  return words[getRandomNumber()];
}

// Function to generate a random sentence
function getRandomSentence() {
  const sentences = [
    'The quick brown fox jumps over the lazy dog.',
    'Pack my box with five dozen liquor jugs.',
    'How vexingly quick daft zebras jump!',
    'jolly good!'
  ];
  return sentences[getRandomNumber()];
}
