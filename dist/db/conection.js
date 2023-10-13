"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DB = new sequelize_1.Sequelize('RealthorDB', 'admdev', '12345', {
    host: '127.0.0.1',
    dialect: 'mariadb',
    // logging:false
});
exports.default = DB;
//# sourceMappingURL=conection.js.map