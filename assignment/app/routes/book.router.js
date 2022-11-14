const books = require("../controllers/book.controller");

module.exports = app => {
    const books = require("../controllers/book.controller");

    var router = require("express").Router();

    router.get("/", books.findAll);
    router.post("/",books.create);
    router.put("/:id", books.update);
    router.delete("/:id", books.delete);
    app.use('/api/books', router);
}