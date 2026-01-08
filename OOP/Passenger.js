import Baggage from './Baggage.js';

class Passenger {
  constructor(name, idNumber, money) {
    this.name = name;
    this.idNumber = idNumber;
    this.money = money;
    this.flights = [];
  }

  buyTicket(flight, isVIP = false) {
    const discount = this.getDiscount(isVIP);
    const basePrice = isVIP ? flight.vipTicketPrice : flight.regularTicketPrice;
    const finalPrice = basePrice * (1 - discount);

    if (this.money < finalPrice) {
      return false;
    }

    const ticketIndex = flight.findEmptyTicket(isVIP);
    if (ticketIndex === -1) {
      return false;
    }

    flight.tickets[ticketIndex].ownerName = this.name;
    this.money -= finalPrice;
    this.flights.push(flight);
    return true;
  }

  getDiscount(isVIP) {
    return 0;
  }

  hasTicketForFlight(flight) {
    return this.flights.includes(flight);
  }

  addBaggage(flight, weight, type) {
    if (!this.hasTicketForFlight(flight)) {
      return false;
    }

    const fee = this.calculateBaggageFee(weight, type);

    if (this.money < fee) {
      return false;
    }

    const baggage = new Baggage(this.idNumber, weight, type);

    if (!flight.addBaggage(baggage)) {
      return false;
    }

    this.money -= fee;
    return true;
  }

  calculateBaggageFee(weight, type) {
    return 0;
  }
}

export default Passenger;
