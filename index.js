const express = require('express');

const data = require('./data.json');

const port = process.env.port || 3030

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/api', (req, res) => {
    res.send(data);
})

app.listen(port, () => {
    console.log(`Server created at port ${port}`)
})