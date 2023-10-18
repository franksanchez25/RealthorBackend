"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const userRoutes = (0, express_1.Router)();
userRoutes.get('/', user_controller_1.getUsers);
console.log('getuser');
exports.default = userRoutes;
//# sourceMappingURL=user.route.js.map