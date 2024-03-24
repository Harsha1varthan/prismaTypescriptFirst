"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = exports.userSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.userSchema = zod_1.default.object({
    name: zod_1.default.string().email(),
    password: zod_1.default.string()
});
exports.todoSchema = zod_1.default.object({
    title: zod_1.default.string(),
    done: zod_1.default.boolean(),
    description: zod_1.default.string()
});
