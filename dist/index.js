"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./routes/index");
const PORT = 4000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1", index_1.router);
app.listen(PORT, () => {
    console.log(`your app is listening at ${PORT}`);
});
