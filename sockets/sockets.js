const {io} = require ('../index.js');


//MENSAJES DE SOKETS
io.on('connection', client => {
    console.log('Cliente Conectado')


    client.on('disconnect', () => { /* … */ });
    console.log('Cliente desconectado')

    client.on('mensaje', ( payload)=>{

        console.log ('Mensaje!!!', payload);
        io.emit('mensaje',{admin:'Hola admin'})
    });
  });
