import { DataTypes } from "sequelize";
import DB from "../../db/conection";

const User = DB.define('User',{
    user_id: {
  type: DataTypes.BIGINT,
  primaryKey: true,
  autoIncrement: true
},
    username:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    status: {
        type:DataTypes.STRING
    },
    password: {
        type:DataTypes.STRING
    },
    avatar:{
        type:DataTypes.STRING,
        defaultValue: "https://simulacionymedicina.es/wp-content/uploads/2015/11/default-avatar-300x300-1.jpg"
    }
});


export default User;