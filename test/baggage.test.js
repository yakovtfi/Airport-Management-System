// bonus
import { test } from 'node:test';
import assert from 'node:assert';
import Flight from '../OOP/Flight.js';
import StudentPassenger from '../OOP/StudentPassenger.js';
import RegularPassenger from '../OOP/RegularPassenger.js';

test('adding baggage without a ticket returns false', () => {
  const flight = new Flight('Morning Flight', 'TestAir', 'TA100', 100, 200, 800 ,100);
  const passenger = new RegularPassenger('Yakov tfilin', '111', 50, 'Company', false);
  
  const result = passenger.addBaggage(flight,5,'carry_on');
  
  assert.strictEqual(result, false);
});

test('student passenger carry_on baggage fee calculation', () => {
  const flight = new Flight('Evening Flight', 'Air654', 'TS234', 100, 200, 800 ,1000);
  const student = new StudentPassenger('yakov tfilin', '333', 300, 'University');

  student.buyTicket(flight, false);
  const initialMoney = student.money;
  
  const result = student.addBaggage(flight, 5, 'carry_on');
  
  assert.strictEqual(result, true);
  assert.strictEqual(student.money, initialMoney);
});

test('student passenger carry_on baggage exceeds free weight', () => {
   const flight = new Flight('Evening Flight', 'Air654', 'TS234', 100, 200, 800 ,1000);
  const student = new StudentPassenger('yakov tfilin', '333', 300, 'University');
  student.buyTicket(flight, false);
  const initialMoney = student.money;
  
  const result = student.addBaggage(flight, 10, 'carry_on');
  
  assert.strictEqual(result, true);
  assert.strictEqual(student.money, initialMoney - 23);
});

test('student passenger checked baggage fee', () => {
   const flight = new Flight('Evening Flight', 'Air654', 'TS234', 100, 200, 800, 1000);
  const student = new StudentPassenger('yakov tfilin', '333', 300, 'University');
  
  student.buyTicket(flight, false);
  const initialMoney = student.money;
  
  const result = student.addBaggage(flight, 20, 'checked');
  
  assert.strictEqual(result, true);
  assert.strictEqual(student.money, initialMoney - 30);
});

test('regular passenger with employee connection carry_on free weight', () => {
  const flight = new Flight('Morning Flight', 'Air111', 'UA458', 100, 200, 800 ,1000);
  const passenger = new RegularPassenger('joni zax', '222', 500, 'Company', true);

  passenger.buyTicket(flight, false);
  const initialMoney = passenger.money;
  
  const result = passenger.addBaggage(flight, 8, 'carry_on');
  
  assert.strictEqual(result, true);
  assert.strictEqual(passenger.money, initialMoney);
});

test('regular passenger with employee connection carry_on exceeds free weight', () => {
 const flight = new Flight('Morning Flight', 'Air111', 'UA458', 100, 200, 800, 1000);
  const passenger = new RegularPassenger('joni zax', '222', 500, 'Company',true);
  
  passenger.buyTicket(flight, false);
  const initialMoney = passenger.money;
  
  const result = passenger.addBaggage(flight, 12, 'carry_on');
  
  assert.strictEqual(result, true);
  assert.strictEqual(passenger.money, initialMoney - 12);
});

test('regular passenger with employee connection checked baggage', () => {
 const flight = new Flight('Morning Flight', 'Air111', 'UA458', 100, 200, 800, 1000);
  const passenger = new RegularPassenger('joni zax', '222', 500, 'Company', true);
 

  
  passenger.buyTicket(flight, false);
  const initialMoney = passenger.money;
 
  
  const result = passenger.addBaggage(flight, 15, 'checked');
  
  assert.strictEqual(result, true);
  assert.strictEqual(passenger.money, initialMoney - 20);
});

test('regular passenger without employee carry_on free weight', () => {
 const flight = new Flight('Morning Flight', 'Air111', 'UA458', 100, 200, 800, 1000);
  const passenger = new RegularPassenger('joni zax', '222', 500, 'Company', false);
  passenger.buyTicket(flight, false);
  const initialMoney = passenger.money;
  
  const result = passenger.addBaggage(flight, 6, 'carry_on');
  
  assert.strictEqual(result, true);
  assert.strictEqual(passenger.money, initialMoney);
});

test('regular passenger without employee carry_on exceeds free weight', () => {
  const flight = new Flight('Morning Flight', 'Air111', 'UA458', 100, 200, 800 ,1000);
  const passenger = new RegularPassenger('joni zax', '222', 500, 'Company', false);
  
  passenger.buyTicket(flight, false);
  const initialMoney = passenger.money;
  
  const result = passenger.addBaggage(flight, 10, 'carry_on');
  
  assert.strictEqual(result, true);
  assert.strictEqual(passenger.money, initialMoney - 23);
});

test('regular passenger without employee checked baggage', () => {
 const flight = new Flight('Morning Flight', 'Air111', 'UA458', 100, 200, 800 ,1000);
  const passenger = new RegularPassenger('joni zax', '222', 500, 'Company', false,);
  
  passenger.buyTicket(flight, false);
  const initialMoney = passenger.money;
  
  const result = passenger.addBaggage(flight, 20, 'checked');
  
  assert.strictEqual(result, true);
  assert.strictEqual(passenger.money, initialMoney - 40);
});

test('adding baggage exceeds flight weight limit returns false', () => {
  const flight = new Flight('Morning Flight', 'Air111', 'UA458', 100, 200, 800, 50);
  const passenger = new RegularPassenger('joni zax', '222', 500, 'Company', false);
  passenger.buyTicket(flight, false);
  const initialMoney = passenger.money;
  
  const result = passenger.addBaggage(flight, 60, 'checked');
  
  assert.strictEqual(result, false);
  assert.strictEqual(passenger.money, initialMoney);
});

test('passenger without enough money for baggage returns false', () => {
  const flight = new Flight('Morning Flight', 'Air111', 'UA458', 100, 200, 800,1000);
  const passenger = new RegularPassenger('joni zax', '222', 50, 'Company', false);
  passenger.buyTicket(flight, false);
  
  const result = passenger.addBaggage(flight, 20, 'checked');
  
  assert.strictEqual(result, false);
});
