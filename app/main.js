import MyPokemonsController from "./Controllers/MyPokemonsController.js";
import ApiPokemonsController from "./Controllers/ApiPokemonsController.js";

class App {
  apiPokemonsController = new ApiPokemonsController();
  myPokemonsController = new MyPokemonsController();
}

window["app"] = new App();
