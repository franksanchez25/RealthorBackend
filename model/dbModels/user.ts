import { DataTypes } from "sequelize";
import DB from "../../db/conection";

const User = DB.define('User',{
    username:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    state: {
        type:DataTypes.STRING
    },
    password: {
        type:DataTypes.STRING
    }
});


export default User;