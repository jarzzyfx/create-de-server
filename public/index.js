"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.js
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const start_1 = require("./helpers/start");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.DEV_PORT || 3000;
app.get("/", (req, res, next) => {
    res.send("Shoppe Express + TypeScript Server");
});
(0, start_1.START)({ app, port });
