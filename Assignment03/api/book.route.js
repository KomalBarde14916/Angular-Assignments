module.exports = app => {
    const BookController = require('../controller/controller.book');
    const express = require('express');
    const router = express.Router();
    //// http://localhost:3000/api

    //GET       http://localhost:3000/api/books/
    router.get('/books/', BookController.findAllBook);

    //GET       http://localhost:3000/api/books/:id
    router.get('/books/:id', BookController.findByPK);

    //POST      http://localhost:3000/api/books/
    router.post('/books/', BookController.insertBook);

    //PUT       http://localhost:3000/api/books/ json{name:,id:}
    router.put('/books/', BookController.updateBook);

    //DELETE    http://localhost:3000/api/books/:id
    router.delete('/books/:id', BookController.deleteBook);

    app.use('./api', router);

}