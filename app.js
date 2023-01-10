const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static(path.resolve(__dirname,'public')));

app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','home.html')))
app.get('/login',(req,res) => res.sendFile(path.resolve(__dirname,'views', 'user', 'login.html')))
app.get('/register',(req,res) => res.sendFile(path.resolve(__dirname,'views', 'user', 'register.html')))

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))

