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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const conection_1 = __importDefault(require("../db/conection"));
const user_route_1 = __importDefault(require("../routes/user.route"));
const cors_1 = __importDefault(require("cors"));
const auth_route_1 = __importDefault(require("../routes/auth.route"));
class Server {
    constructor() {
        this.apiPath = {
            user: '/api/user',
            auth: '/api/auth'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port:${this.port}!`);
        });
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conection_1.default.authenticate();
                console.log('Database online!');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPath.user, user_route_1.default);
        this.app.use(this.apiPath.auth, auth_route_1.default);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map