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
            
            console.log('Cliente Conectado' ,socket.id)
          
            socket.emit('current-bands', this.bandlist.getBandList() )

            socket.on('increment-votes',(id : String)=>{
                this.bandlist.incrementVotes(id)
                this.io.emit('current-bands', this.bandlist.getBandList())
            })
            socket.on('remove-band',(id : String)=>{
                this.bandlist.removedBand(id)
                this.io.emit('current-bands', this.bandlist.getBandList())
            })

            socket.on('add-band',(name : String)=>{
                this.bandlist.addBand(name)
                this.io.emit('current-bands', this.bandlist.getBandList())
            })

            socket.on('change-name',({id,name})=>{
                this.bandlist.changeName(id,name)
                this.io.emit('current-bands', this.bandlist.getBandList())
            })
            
        });
    }

}
