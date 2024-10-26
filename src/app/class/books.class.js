"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
var Books = /** @class */ (function () {
    function Books() {
        this.books = [];
    }
    Books.prototype.create = function (book) {
        return this.books.push(book) > 0;
    };
    Books.prototype.read = function () {
        return this.books;
    };
    Books.prototype.update = function (index, book) {
        this.books.splice(index, 1, book);
    };
    Books.prototype.remove = function (index) {
        this.books.splice(index, 1);
        return true;
    };
    return Books;
}());
exports.Books = Books;
