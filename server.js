import http from "http";
import express from "express";

const api = express();

api.get("/top50", (req,res) =>{
    return res.send("hola tru");

});

api.get("/test1", (req,res)=>{
    return res.json({
        nombre: "Emmanuel",
        edad: "32",
    });
})

api.get('/ejercicio1',(req,res)=> {
    const cadena = req.query.s;
    if (cadena.length > 10){
        res.send("Error la cadena ingresada es mayor a 10 caracteres");
    }
    return res.json({
        ejercicio1: cadena.toUpperCase(),
    }); 
    
});

api.get('/ejercicio2', (req,res)=>{
    const body = req.body;
    console.log(body);
    const a = 1;
    const b = 2;
    return res.send(`${a+b}`)
})

const server = http.createServer(api);

server.listen(4000);

server.on('listening', ()=>{
    console.log('Servidor escuchando');
});
server.on('error', ()=>{
    console.error('Ha ocurrido un error')
});