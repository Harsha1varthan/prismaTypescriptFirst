"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const todo_1 = require("./todo");
const user_1 = require("./user");
exports.router = express_1.default.Router();
exports.router.use("/user", user_1.userRouter);
exports.router.use("todo", todo_1.todorouter);
