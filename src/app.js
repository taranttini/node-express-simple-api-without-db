const express = require('express');

const app = new express();

app.use(express.json());

const user = require('./controllers/user.js');

app.get('/', (req, res) => {
    const {nome} = req.query;
    res.status(200).send(`<h1>meu nome é ${nome}</h1>`)
})

app.use('/user', user)

app.listen(3333);
console.log('running on 3333')