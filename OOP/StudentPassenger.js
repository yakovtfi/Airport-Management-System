import Passenger from './Passenger.js';

class StudentPassenger extends Passenger {
  constructor(name, idNumber, money, school) {
    super(name, idNumber, money);
    this.school = school;
  }

  getDiscount(isVIP) {
    return isVIP ? 0 : 0.10;
  }
  
// bonus
  calculateBaggageFee(weight, type) {
    if (type === 'carry_on') {
      return weight > 7 ? weight - 7 + 20 : 0;
    } else {
      return 30;
    }
  }
}

export default StudentPassenger;
