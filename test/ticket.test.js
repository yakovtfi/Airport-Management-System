import { test } from 'node:test';
import assert from 'node:assert';
import Flight from '../OOP/Flight.js';
import StudentPassenger from '../OOP/StudentPassenger.js';
import RegularPassenger from '../OOP/RegularPassenger.js';


test('passenger without enough money cannot buy ticket', () => {
  const flight = new Flight('Morning Flight', 'TestAir', 'TA100', 100, 200, 800);
  const passenger = new RegularPassenger('Yakov tfilin', '111', 50, 'Company', false);
  
  const result = passenger.buyTicket(flight, false);
  
  assert.strictEqual(result, false);
});

test('passenger with enough money can buy regular ticket', () => {
  const flight = new Flight('Morning Flight', 'Air111', 'UA458', 100, 200, 800);
  const passenger = new RegularPassenger('joni zax', '222', 500, 'Company', false);
  
  const initialMoney = passenger.money;
  const result = passenger.buyTicket(flight, false);
  
  assert.strictEqual(result, true);
  assert.strictEqual(passenger.money, initialMoney - 200);
  
  const ticket = flight.tickets.find(t => t.ownerName === passenger.name);
  assert.strictEqual(ticket.ownerName, passenger.name);
});
//  פה זה הוספה שלי שגם בודקת סטודנט למרות שדרשו רק לעשות שתי בדיקות על נוסעים למרות שאם אותו דבר
test('student passenger with enough money can buy regular ticket with discount', () => {
  const flight = new Flight('Evening Flight', 'Air654', 'TS234', 100, 200, 800);
  const student = new StudentPassenger('yakov tfilin', '333', 300, 'University');
  
  const initialMoney = student.money;
  const result = student.buyTicket(flight, false);
  
  assert.strictEqual(result, true);
  assert.strictEqual(student.money, initialMoney - 180);
  
  const ticket = flight.tickets.find(t => t.ownerName === student.name);
  assert.strictEqual(ticket.ownerName, student.name);
});

test('student without enough money cannot buy ticket', () => {
  const flight = new Flight('Morning Flight', 'TestAir', 'TA100', 100, 200, 800);
  const passenger = new StudentPassenger('Yakov tfilin', '111', 50, 'Company', false);
  
  const result = passenger.buyTicket(flight, false);
  
  assert.strictEqual(result, false);
});
