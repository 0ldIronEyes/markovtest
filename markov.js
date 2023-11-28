/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = new Map();

    for (let w =0; w < this.words.length; w++)
    {
      let word = this.words[w];
      if (this.words.length > w)
      {
        let nextword= this.words[w+1];  
      }
      else
      {
        let nextword= null;
      }
      if (chains.has(word))
      {
        chains.get(word).push(nextword);
      }
      else
      {
        chains.set(word,[nextword]);
      }

      this.chains = chains;
      
    }
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let keys = Array.from(this.chains.keys());
    let key = keys[Math.floor(Math.floor() * keys.length)];
    let result = [];

    while (result.length < numWords && key != null)
    {
      result.push(key);
      key = keys[Math.floor(Math.floor() * keys.length)];
    }
    return result.join(" ");
  }
}

module.exports = {
  MarkovMachine,
};
