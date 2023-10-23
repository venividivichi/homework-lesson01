
function randomDelayPrint(phrase) {
  let lettersArr = phrase.split('');
  let index = 0;

  function printNextLetter() {
    if (index < lettersArr.length) {
      let letter = lettersArr[index];
      let delay = Math.random() * 1000;

      setTimeout(() => {
        console.log(letter);
        index++;
        printNextLetter();
      }, delay);
    }
  }

  printNextLetter();
}

randomDelayPrint('blabla');