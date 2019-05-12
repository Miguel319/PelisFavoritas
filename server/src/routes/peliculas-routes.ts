import { Router } from "express";
import peliculasControllers from "../controllers/peliculas-controllers";

class PeliculasRoutes {
  public router: Router = Router();

  constructor() {
    this.configurar();
  }

  configurar(): void {
    this.router.get("/", peliculasControllers.index);
    this.router.get("/:id", peliculasControllers.obtenerPelicula);
    this.router.post("/", peliculasControllers.crear);
    this.router.put("/:id", peliculasControllers.actualizar);
    this.router.delete("/:id", peliculasControllers.eliminar);
  }
}

const peliculasRoutes = new PeliculasRoutes();

export default peliculasRoutes.router;
