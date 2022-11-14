import { appState } from "../AppState.js";
import { cardsService } from "../Services/CardsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawCards() {
  let cards = appState.cards
  let template = ''
  cards.forEach(c => template += c.CardTemplate)
  setHTML('cards', template)
}


export class CardsController {
  constructor() {
    console.log('cards controller loaded');
    this.getCards()
    appState.on('cards', _drawCards)
  }

  async getCards() {
    console.log('Getting cards');
    // NOTE await hold the code on this line until it has finished
    await cardsService.getCards()
    console.log('got the cards');
  }

  async getHouseCards(house) {
    // NOTE try catch runs the code in try, if any of it fails, it stops the code and jumps to the catch
    try {
      console.log('getting cards from ', house);
      await cardsService.getHouseCards(house)
    } catch (error) {
      console.error('An error occurred, you sure your request is right dude?')
      console.error(error)
      Pop.error(error.message)
    }
  }
}