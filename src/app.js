
const {envs} = require('./config/env')
const {startServer} = require('./server/server')




// ejecutamos una funcion main, que será autoconvocada
const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

// Establecemos la funcion asincrona, autoconvocada
(async () => {
    main()
})()
