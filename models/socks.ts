import BandList from "./band-list";

export default class Sockets{
    io: any 
    bandlist : BandList

    constructor(io){
        this.io = io
        this.bandlist = new BandList()
        this.socketEvents();

    }

    socketEvents(){
        this.io.on('connection', (socket) => {
            
            console.log('Cliente Conectado')
          
            socket.emit('current-bands', this.bandlist.getBandList() )
            
        });
    }

}
