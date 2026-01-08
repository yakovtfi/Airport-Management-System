import Airport from "./Airport.js";
import RegularPassenger from './RegularPassenger.js'
import StudentPassenger from "./StudentPassenger.js";

const airport = new Airport();

const student = new StudentPassenger('yakov tfilin','050956',1000,'Kodcode');
const regular = new RegularPassenger('joni zax','050730',500,'Tech crop',true);

console.log('Airport created with', airport.flights.length, 'flights');

const flight1 = airport.flights[0];
const flight2 = airport.flights[1];

console.log('\nRegular passenger buying regular ticket');
const regularSuccess = regular.buyTicket(flight1, false);
console.log('Purchase success:', regularSuccess);
console.log('Remaining money:', regular.money);

console.log('\nStudent buying VIP ticket');
const studentSuccess = student.buyTicket(flight2, true);
console.log('Purchase success:', studentSuccess);
console.log('Remaining money:', student.money);

