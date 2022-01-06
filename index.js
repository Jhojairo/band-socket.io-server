const express = require('express'); // trae toda la paueteria de expres
const app = express(); /// inicialisa el servidor junto al metodo .listen
const path= require('path');
require('dotenv').config(); //detecta el puerto del servidor 

// sever 
/// creando servidor
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/sockets'); //laamando al paquete sokects desde dond se estan emitiendo events





const publicPath=path.resolve(__dirname, 'public');/// esto apunda a donde seea que este corriendo el servidor local 
app.use(express.static(publicPath));


server.listen(process.env.PORT, (err)=> {

if (err) throw new Error (err);
console.log(`servidor corriendo en puerto !!!:` ,3000);


})