import { Request, Response } from "express";
import pool from "../db";

class PeliculasController {
  public async index(req: Request, res: Response) {
    const peliculas = await pool.query("SELECT * FROM Peliculas");
    res.json(peliculas);
  }

  public async obtenerPelicula(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const peliculas = await pool.query('SELECT * FROM Peliculas WHERE id = ?', [id]);
    
    if (peliculas.length > 0) {
      return res.json(peliculas[0]);
    }
    res.status(404).json({text: '¡Película no encontrada!'});
  }
  
  public async crear(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO Peliculas set ?", [req.body]);
    res.json({ message: "¡Película guardada satisfactoriamente!" });
  }

  public async actualizar(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('UPDATE Peliculas set ? WHERE id = ?', [req.body, id]);
    res.json({message: '¡Película actualizada satisfactoriamente!'});
  }

  public async eliminar(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('DELETE FROM Peliculas WHERE id = ?', [id]);
    res.json({message: '¡Película eliminada satisfactoriamente!'});
  }
}

const peliculasController = new PeliculasController();
export default peliculasController;
