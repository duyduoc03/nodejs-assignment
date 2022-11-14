module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("books", {
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.DECIMAL
        },
        // published: {
        //     type: Sequelize.BOOLEAN
        // }
    });

    return Book;
};