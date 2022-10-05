// 🤖: create 2 constants with references to textarea input and the stats section from the DOM

//const { update } = require("cypress/types/lodash");



// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.

class WordCounter {
  constructor(inputText) {
      this.inputText = inputText;
      this.inputText.addEventListener('#input', () => {
          this.count();
      });
  }
  count() {
      let wordStat = this.getWordStat(thisinputText.value.trim());
      this.emitEvent(wordStat);
  }
  emitEvent(wordStat) {
      let countEvent = new CustomEvent('#count', {
          bubbles: true,
          cancelable: true,
          detail: {
              wordStat
          }
      });
      this.inputText.dispatchEvent(countEvent);
  }
  getWordStat(str) {
      let matches = str.match(/\s+/g);
      return {
          characters: str.length,
          words: matches ? matches.length : 0,
      };
  }
}
const inputText = document.querySelector('#text');
const statElem = document.querySelector('#stat');
new WordCounter(inputText);
const render = (event) => {
    statElem.innerHTML = `<p>You've written <span class="highlight">${event.detail.wordStat.words} words</span>
        and <span class="highlight">${event.detail.wordStat.characters} characters</span>.</p>`;
}
inputText.addEventListener('count', render);