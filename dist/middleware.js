"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
function authMiddleware(req, res, next) {
    const authHeaders = req.headers['authorization'];
    if (!authHeaders && !(authHeaders === null || authHeaders === void 0 ? void 0 : authHeaders.startsWith('Bearer '))) {
        res.status(404).json({
            msg: "You've sent wrong credential",
        });
    }
    const token = authHeaders === null || authHeaders === void 0 ? void 0 : authHeaders.split(' ')[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.secret);
        next();
    }
    catch (err) {
        return res.status(404).json({
            msg: "bad request"
        });
    }
}
exports.default = authMiddleware;
