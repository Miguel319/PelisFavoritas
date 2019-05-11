import { Router } from "express";
import peliculasControllers from '../controllers/peliculas-controllers';

class PeliculasRoutes {
  public router: Router = Router();

  constructor() {
    this.configurar();
  }

  configurar(): void {
    this.router.get("/", peliculasControllers.index);
  }
}

const peliculasRoutes = new PeliculasRoutes();

export default peliculasRoutes.router;
