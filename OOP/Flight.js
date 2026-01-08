import RegularTicket from './RegularTicket.js';
import VIPTicket from './VIPTicket.js';

class Flight {
  constructor(flightName, airline, flightNumber, maxPassengers, regularTicketPrice, vipTicketPrice, maxBaggageWeight = 5000) {
    this.flightName = flightName;
    this.airline = airline;
    this.flightNumber = flightNumber;
    this.maxPassengers = maxPassengers;
    this.regularTicketPrice = regularTicketPrice;
    this.vipTicketPrice = vipTicketPrice;
    this.maxBaggageWeight = maxBaggageWeight;
    this.tickets = this.createTickets();
    this.baggage = [];
  }

  createTickets() {
    const tickets = [];
    const vipCount = Math.floor(this.maxPassengers * 0.10);
    const regularCount = this.maxPassengers - vipCount;

    for (let i = 0; i < regularCount; i++) {
      tickets.push(new RegularTicket(this.regularTicketPrice));
    }

    for (let i = 0; i < vipCount; i++) {
      tickets.push(new VIPTicket(this.vipTicketPrice));
    }

    return tickets;
  }

  findEmptyTicket(isVIP) {
    for (let i = 0; i < this.tickets.length; i++) {
      const ticket = this.tickets[i];
      if (!ticket.ownerName) {
        if ((isVIP && ticket instanceof VIPTicket) || (!isVIP && ticket instanceof RegularTicket)) {
          return i;
        }
      }
    }
    return -1;
  }

  getTotalBaggageWeight() {
    return this.baggage.reduce((sum, bag) => sum + bag.weight, 0);
  }

  addBaggage(baggage) {
    const currentWeight = this.getTotalBaggageWeight();
    if (currentWeight + baggage.weight > this.maxBaggageWeight) {
      return false;
    }
    this.baggage.push(baggage);
    return true;
  }
}

export default Flight;
