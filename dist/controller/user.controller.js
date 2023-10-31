"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserInfo = exports.getUsers = void 0;
const bcrypt_1 = require("bcrypt");
const user_1 = __importDefault(require("../model/dbModels/user"));
const getUsers = (req, res) => {
    res.json({
        msg: 'GetUser'
    });
};
exports.getUsers = getUsers;
const updateUserInfo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    if (req.userId != id) {
        res.status(401).json({ msg: `You can only update your account: id-token :${req.userId} : id-req:${id}`,
        });
    }
    const salt = (0, bcrypt_1.genSaltSync)(10);
    try {
        if (body.password) {
            body.password = (0, bcrypt_1.hashSync)(body.password, salt);
        }
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            res.status(404).json({ msg: 'No user found' });
        }
        yield (user === null || user === void 0 ? void 0 : user.update(body));
        const _a = user === null || user === void 0 ? void 0 : user.dataValues, { password: password } = _a, rest = __rest(_a, ["password"]);
        res.status(200).json(user);
    }
    catch (error) {
        next(res.json(error));
    }
});
exports.updateUserInfo = updateUserInfo;
//# sourceMappingURL=user.controller.js.map