export default splitStringToTwo = (string) => {
  const wordsArray = string.split(" ");

  let firstLine = "";
  let secondLine = "";

  if (wordsArray.length == 1) {
    firstLine = wordsArray[0];
  }

  if (wordsArray.length == 2) {
    firstLine = wordsArray[0];
    secondLine = wordsArray[1];
  }

  if (wordsArray.length > 2) {
    firstLine = wordsArray[0];
    wordsArray.splice(0, 1);

    secondLine = wordsArray[wordsArray.length - 1];
    wordsArray.splice(wordsArray.length - 1, 1);

    while (wordsArray.length != 0) {
      let firstWord = wordsArray[0];
      let lastWord = wordsArray[wordsArray.length - 1];

      if (firstLine.length < secondLine.length) {
        firstLine = firstLine + " " + firstWord.trim();
        wordsArray.splice(0, 1);
      } else {
        secondLine = lastWord + " " + secondLine.trim();
        wordsArray.splice(wordsArray.length - 1, 1);
      }
    }
  }

  return [firstLine, secondLine];
};
