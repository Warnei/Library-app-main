"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var books_class_1 = require("./src/app/class/books.class");
var students_class_1 = require("./src/app/class/students.class");
var view_1 = require("./src/app/view/console/view");
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.main = function () {
        var view = new view_1.ViewConsole(new books_class_1.Books, new students_class_1.Students);
        view.showMenu();
        view.selectedOption();
        view.processSelectedOption();
    };
    return Application;
}());
Application.main();
