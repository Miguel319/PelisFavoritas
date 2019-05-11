"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const peliculas_controllers_1 = __importDefault(require("../controllers/peliculas-controllers"));
class PeliculasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.configurar();
    }
    configurar() {
        this.router.get("/", peliculas_controllers_1.default.index);
    }
}
const peliculasRoutes = new PeliculasRoutes();
exports.default = peliculasRoutes.router;
