import { Router } from "express";

class PeliculasRoutes {
  public router: Router = Router();

  constructor() {
    this.configurar();
  }

  configurar(): void {
    this.router.get("/", (req, res) => res.send("Películas"));
  }
}

const peliculasRoutes = new PeliculasRoutes();

export default peliculasRoutes.router;
