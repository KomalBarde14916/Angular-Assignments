const express = require('express'),
    path = require('path'),

    cors = require('cors'),
    app = express(),
    port = 3000;
const CorsOptions = { origin: "http://localhost:4200" }

const router = require('express').Router();

app.use(cors(CorsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, resp) => {
    resp.send("Get called");
})


require('./api/book.route')(app);

app.listen(port, () => { console.log('server listening to port' + port) });