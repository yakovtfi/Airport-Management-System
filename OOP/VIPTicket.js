import Ticket from "./Ticket.js";

class VIPTicket extends Ticket{
    constructor(Price,ownerName=null){
        super(Price,ownerName);
        this.Benefits = ['Free alcohol', 'Free food', 'Hot towels'];

    }
}

export default VIPTicket;