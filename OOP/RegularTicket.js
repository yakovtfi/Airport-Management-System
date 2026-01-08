import Ticket from "./Ticket.js";

class RegularTicket extends Ticket{
    constructor(Price,ownerName=null){
        super(Price,ownerName)
    }
}

export default RegularTicket;