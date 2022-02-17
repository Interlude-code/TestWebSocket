import ServerExpress from "./models/server.js";
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });


const server = new ServerExpress()
server.execute()


