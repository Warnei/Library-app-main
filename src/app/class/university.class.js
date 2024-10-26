"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversityLibrary = void 0;
var library_process_abstract_1 = require("../abstractions/library-process.abstract");
var UniversityLibrary = /** @class */ (function (_super) {
    __extends(UniversityLibrary, _super);
    function UniversityLibrary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UniversityLibrary.prototype.isBookAvailable = function (book) {
        return true;
    };
    UniversityLibrary.prototype.isStudentRegistered = function (student) {
        return true;
    };
    UniversityLibrary.prototype.toLean = function (student) {
        console.log("prestado!");
    };
    UniversityLibrary.prototype.toClaim = function (student) {
        console.log("reclamar!");
    };
    return UniversityLibrary;
}(library_process_abstract_1.LibraryProcess));
exports.UniversityLibrary = UniversityLibrary;
