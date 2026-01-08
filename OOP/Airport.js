import Flight from "./Flight.js";

class Airport{
    constructor(){
        this.flights = this.createFlights()

    }
    createFlights(){
        return[
      new Flight('Morning Flight', 'AirCo', 'AB101', 100, 200, 800),
      new Flight('Afternoon Flight', 'SkyLine', 'SL708', 150, 250, 900),
      new Flight('Evening Flight', 'CloudJet', 'CJ550', 120, 220, 850)
        ]
    }
}

export default Airport;