import { CardsController } from "./Controllers/CardsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {

  cardsController = new CardsController()
}

window["app"] = new App();
