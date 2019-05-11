import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/index-routes';

import peliculasRoutes from './routes/peliculas-routes';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.configurar();
        this.rutas();
    }

    configurar(): void {
       this.app.set('port', process.env.PORT || 3000);
       this.app.use(morgan('dev'));
       this.app.use(cors());
       this.app.use(express.json());
       this.app.use(express.urlencoded({extended: false}));
    }

    rutas(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/peliculas', peliculasRoutes);

    }

    iniciar(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}

const servidor = new Server();
servidor.iniciar();