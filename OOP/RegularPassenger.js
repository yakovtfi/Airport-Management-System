import Passenger from './Passenger.js';

class RegularPassenger extends Passenger {
  constructor(name, idNumber, money, workplace, knowsEmployee) {
    super(name, idNumber, money);
    this.workplace = workplace;
    this.knowsEmployee = knowsEmployee;
  }

  getDiscount(isVIP) {
    if (!this.knowsEmployee) {
      return 0;
    }
    return isVIP ? 0.15 : 0.20;
  }
// bonus
 calculateBaggageFee(weight, type) {
    if (type === 'carry_on') {
      if (this.knowsEmployee) {
        return weight > 10 ? weight - 10 + 10 : 0;
      } else {
        return weight > 7 ? weight - 7 + 20 : 0;
      }
    } else {
      return this.knowsEmployee ? 20 : 40;
    }
  }
}


export default RegularPassenger;
