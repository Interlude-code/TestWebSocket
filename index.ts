import ServerExpress from "./models/server";
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });


const server = new ServerExpress()
server.execute()


