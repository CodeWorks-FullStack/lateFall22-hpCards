import { appState } from "../AppState.js";
import { Card } from "../Models/Card.js";

class CardsService {
  async getHouseCards(house) {
    const res = await axios.get('https://hp-api.herokuapp.com/api/characters/house/' + house)
    console.log('house data', res.data);
    appState.cards = res.data.map(cd => new Card(cd))
  }
  async getCards() {
    // NOTE the Fetch method
    // const response = await fetch('https://hp-api.herokuapp.com/api/characters')
    // console.log('get cards res', response);
    // const data = await response.json()
    // console.log('the data', data);

    // NOTE magic? axios is not here when writing the code, but here after it's loaded by the index.html
    const response = await axios.get('https://hp-api.herokuapp.com/api/characters')
    console.log('card data', response.data);
    appState.cards = response.data.map(cardData => new Card(cardData)) //we will do more here in a second
  }

}

export const cardsService = new CardsService()