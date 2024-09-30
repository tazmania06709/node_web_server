const { envs } = require('./config/env')
const { startServer } = require('./server/server')


const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

// Función agnóstica autoconvocada
// Agnóstica por que no tiene nombre
// Autoconvocada porque la ejecutamos con los parentesis

//Funcion agnostica autoconvocada (() => {})()
// Agnostica porque no tiene nombre
// Autoconvocada porque la ejecutamos con los parentesis
// Funcion autoejecutable

//Funcion agnostica sin nombre, a su vez ejecutarla --> autoconvocada y asincronica(async () => {})()
(async () => {
    main()
})()
