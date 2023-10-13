import express, {Application} from "express";
import DB from "../db/conection";


class Server {
    private app: Application;
    private port: string 

     constructor (){

        this.app = express(); 
        this.port = process.env.PORT || '8000'

    }

    
    listen() {

            this.app.listen( ()=>{
                console.log(`Server running on port:${this.port}!`)
            } )
    }

     async dbConnection() {

     try {

        await DB.authenticate();
        console.log('Database online!');
        
     } catch (error: any) {
        
        throw new Error(error);
     }

    }
        
}

export default Server;