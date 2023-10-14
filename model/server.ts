import express, {Application} from "express";
import DB from "../db/conection";
import userRoutes from "../routes/user.route";
import cors from "cors";


class Server {

    private app: Application;
    private port: string 
    private apiPath = {
        user: '/api/user'
    }
     constructor (){

        this.app = express(); 
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();
        this.routes();

    }

    
    listen() {

            this.app.listen(this.port, ()=> {
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

    middlewares (){
        this.app.use(cors());
        this.app.use( express.json());
    }

    routes() {
        this.app.use(this.apiPath.user, userRoutes ) 
      
    }
        
}

export default Server;