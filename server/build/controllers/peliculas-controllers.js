"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
class PeliculasController {
    index(req, res) {
        db_1.default.query("DESCRIBE peliculas");
        res.json("Películas");
    }
}
const peliculasController = new PeliculasController();
exports.default = peliculasController;
