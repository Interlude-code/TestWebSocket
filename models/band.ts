import {v4 as uuid4} from 'uuid';

export default class Band{
    id   : String;
    name : String;
    votes: number;

    constructor(name){
        this.id    = uuid4()
        this.name  = name
        this.votes = 0
    }

}
