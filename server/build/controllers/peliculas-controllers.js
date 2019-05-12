"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
class PeliculasController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const peliculas = yield db_1.default.query("SELECT * FROM Peliculas");
            res.json(peliculas);
        });
    }
    obtenerPelicula(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const peliculas = yield db_1.default.query('SELECT * FROM Peliculas WHERE id = ?', [id]);
            if (peliculas.length > 0) {
                return res.json(peliculas[0]);
            }
            res.status(404).json({ text: '¡Película no encontrada!' });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_1.default.query("INSERT INTO Peliculas set ?", [req.body]);
            res.json({ message: "¡Película guardada satisfactoriamente!" });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield db_1.default.query('UPDATE Peliculas set ? WHERE id = ?', [req.body, id]);
            res.json({ message: '¡Película actualizada satisfactoriamente!' });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield db_1.default.query('DELETE FROM Peliculas WHERE id = ?', [id]);
            res.json({ message: '¡Película eliminada satisfactoriamente!' });
        });
    }
}
const peliculasController = new PeliculasController();
exports.default = peliculasController;
