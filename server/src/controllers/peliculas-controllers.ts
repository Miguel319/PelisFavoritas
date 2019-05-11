import { Request, Response } from "express";
import pool from "../db";

class PeliculasController {
  public index(req: Request, res: Response) {
    pool.query("DESCRIBE peliculas");
    res.json("Películas");
  }
}

const peliculasController = new PeliculasController();
export default peliculasController;
