"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
var Students = /** @class */ (function () {
    function Students() {
        this.students = [];
    }
    Students.prototype.create = function (student) {
        return this.students.push(student) > 0;
    };
    Students.prototype.read = function () {
        return this.students;
    };
    Students.prototype.update = function (index, student) {
        this.students.splice(index, 1, student);
    };
    Students.prototype.remove = function (index) {
        this.students.splice(index, 1);
        return true;
    };
    return Students;
}());
exports.Students = Students;
