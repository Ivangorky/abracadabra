const express = require('express')
const app = express()
app.use(express.static('static'));
const usuario = 
app.get("/Inicio", (req, res) => {
    res.send("Servidor con Expres")
})

app.listen(3000, () => {
console.log('El servidor está inicializado')
})