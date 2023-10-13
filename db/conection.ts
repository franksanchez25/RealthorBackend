import { Sequelize } from "sequelize";


const DB = new Sequelize ('RealthorDB', 'admdev','12345', {
    host: '127.0.0.1',
    dialect: 'mariadb',
  
    // logging:false
});

export default DB;