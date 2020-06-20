 const express = require('express')

const app = express()
const path = require('path');
const port = 3000

app.get('/', (req, res) => res.sendfile(path.join(__dirname + '/home.html')));
app.get('/dashboard.html', (req, res) => res.sendfile(path.join(__dirname + '/dashboard.html')));
app.get('/home.html', (req, res) => res.sendfile(path.join(__dirname + '/home.html')));
app.get('/login.html', (req, res) => res.sendfile(path.join(__dirname + '/login.html')));
app.get('/signup.html', (req, res) => res.sendfile(path.join(__dirname + '/signup.html')));




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
