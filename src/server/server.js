import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

// Get the filename
const __filename = fileURLToPath(import.meta.url);

// Get the directory name
const __dirname = dirname(__filename);

export const startServer = (options) => {
    const { port, public_path = 'public' } = options;

    const app = express();

    // Para usar middleware se usa la palabra use (ecpress)
    app.use(express.static(public_path)); // Contenido estatico que ponemos disponible
    // request(req) es la peticion y response(res) la respuesta
    // app.get('/hola-mundo', (req, res) => {
    //     res.send('Hola Mundo');
    // });
    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `/../${public_path}/index.html`);
        res.sendFile(indexPath);
    });
    // listen es para abrir un port y estar escuchando por un port
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};
