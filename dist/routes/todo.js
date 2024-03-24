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
exports.todorouter = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const validate_1 = require("../validate");
exports.todorouter = express_1.default.Router();
const prisma = new client_1.PrismaClient();
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Error"] = 500] = "Error";
})(StatusCode || (StatusCode = {}));
exports.todorouter.post("/post", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const { success } = validate_1.todoSchema.safeParse(body);
    if (success) {
        const response = yield prisma.todo.create({
            data: {
                title: body.title,
                done: body.done,
                description: body.description
            }
        });
        return res.status(StatusCode.Success).json({
            msg: "created successfully",
            data: response
        });
    }
    else {
        return res.status(StatusCode.Error).json({
            msg: "Bad inputs"
        });
    }
}));
