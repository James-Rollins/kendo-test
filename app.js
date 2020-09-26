const express = require('express')
const app = express()
const port = 8080
path = require('path')
const data = require('./data.json')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/data.json', (req, res) => {
    res.json(data)
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
})