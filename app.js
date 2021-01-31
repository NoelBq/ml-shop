const express = require('express');
const app = express();
const path = require('path');


const staticFolder = path.resolve(__dirname, 'public');
app.use(express.static(staticFolder));

app.get('/', (req, res) => {
     res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server Running')
})