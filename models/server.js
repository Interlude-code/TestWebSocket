import express from 'express';
import { createServer } from 'http';
import {Server} from 'socket.io'
import Sockets from './socks.js';


class ServerExpress{

    constructor(){
        this.app    = express()
        this.port   = process.env.PORT
        this.server = createServer(this.app)
        this.io     = new Server(this.server)
    }
    
    middleware(){
        this.app.use(express.static('public'))
        
    }

    configuracionSockets(){

        new Sockets(this.io)
    }

    execute(){
        this.middleware();
        this.configuracionSockets();
        this.server.listen(this.port, ()=>{
            console.log('server running on port ' + this.port)
        });
    }


}

export default ServerExpress
