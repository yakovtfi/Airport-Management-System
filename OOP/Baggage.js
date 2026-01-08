// bonus
class Baggage{
    static baggageidcounter = 1

    constructor(ownerId, weight, type){
        this.baggageid = Baggage.baggageidcounter++;
        this.ownerId = ownerId;
        this.weight = weight;
        this.type = type;

    }
}

export default Baggage;