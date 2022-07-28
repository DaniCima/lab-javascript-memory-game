class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(deck) {
   // const shuffle = (array) {
      // let oldElement;
      // for (let i = array.length - 1; i > 0; i--) {
      //   let rand = Math.floor(Math.random() * (i + 1));
      //   oldElement = array[i];
      //   array[i] = array[rand];
      //   array[rand] = oldElement;
      // }
      for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
      return deck;
    } 
  

  checkIfPair(card1, card2) {
   // if (this.pickedCards % 2 === 0) {
      this.pairsClicked++;
   // }
    if (card1 === card2) {
    this.pairsGuessed++;
    return true;
  } else {
    return false;
  }
}


  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
 }
// -- To shuffle an array a of n elements (indices 0..n-1):
// for i from n−1 downto 1 do
//      j ← random integer such that 0 ≤ j ≤ i
//      exchange a[j] and a[i]
