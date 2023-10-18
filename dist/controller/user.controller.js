"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putUser = exports.postUser = exports.getUserByID = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: 'GetUser'
    });
};
exports.getUsers = getUsers;
const getUserByID = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'GetUser',
        id: id
    });
};
exports.getUserByID = getUserByID;
const postUser = (req, res) => {
    const body = req.body;
    res.json({
        msg: 'Post User',
        body
    });
};
exports.postUser = postUser;
const putUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Put User',
        id: id
    });
};
exports.putUser = putUser;
//# sourceMappingURL=user.controller.js.map