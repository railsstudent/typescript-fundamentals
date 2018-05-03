/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

type Card = [Suit, CardNumber];

export class Dealer {
  cards: Card[];
  constructor() {
    this.cards = [];
    for (let i = 0; i < Object.keys(Suit).length / 2; i++) {
      for (let j = 0; j < Object.keys(CardNumber).length / 2; j++) {
        this.cards.push([i, j]);
      }
    }
    shuffleArray(this.cards);
  }
  getLength(): number {
    return this.cards.length;
  }

  readCard(card: Card): string {
    const [suit, num] = card;
    return `${CardNumber[num]} of ${Suit[suit]}`;
  }

  dealHand(num: number): Card[] {
    if (num < 0 || num > this.getLength()) {
      throw new Error("Error");
    }

    const results: Card[] = this.cards.splice(0, num);
    shuffleArray(this.cards);
    return results;
  }
}

export enum Suit {
  Clubs = 0,
  Diamonds = 1,
  Hearts = 2,
  Spades = 3
}

export enum CardNumber {
  Ace,
  Two,
  Three,
  Four,
  Fifth,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King
}
