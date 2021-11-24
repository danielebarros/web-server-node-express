
const http = require ('http');

http.createServer( (req,res) => {

    console.log(req);
    
    res.write('hola mundo!');
    res.end();

})
.listen( 8181 );

console.log('Escuchando en el puerto 8181');



