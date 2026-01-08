class Ticket{
    constructor(Price,ownerName=null ){
        this.RandomTicketNumber = Math.floor(Math.random()*100000);
        this.Price = Price;
        this.ownerName = ownerName;
    }
}

export default Ticket;
