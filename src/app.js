// const { envs } = require( './config/env.js');
import { envs } from './config/env.js';
// const  { startServer } = require( './server/server.js' );
import { startServer } from './server/server.js';

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    });
};

//Funcion agnostica autoconvocada (() => {})()
// Agnostica porque no tiene nombre
// Autoconvocada porque la ejecutamos con los parentesis
// Funcion autoejecutable

//Funcion agnostica sin nombre, a su vez ejecutarla --> autoconvocada y asincronica(async () => {})()
(async () => {
    main()
})() 
