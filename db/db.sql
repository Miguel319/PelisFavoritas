CREATE DATABASE pelis_fav_db;

USE pelis_fav_db;

CREATE TABLE Peliculas (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200),
    descripcion VARCHAR(255),
    director VARCHAR(100),
    imagen VARCHAR(255),
    creado_en IMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE Peliculas;