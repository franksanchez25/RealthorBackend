"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const verifytoken_1 = require("../utils/verifytoken");
const userRoutes = (0, express_1.Router)();
userRoutes.get('/', user_controller_1.getUsers);
userRoutes.put('/update/:id', verifytoken_1.verifyUserToken, user_controller_1.updateUserInfo);
userRoutes.delete('/delete/:id', verifytoken_1.verifyUserToken, user_controller_1.deleteUser);
userRoutes.get('/signout', user_controller_1.logoutUser);
exports.default = userRoutes;
//# sourceMappingURL=user.route.js.map