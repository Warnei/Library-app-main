"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewConsole = void 0;
var scanf = require("scanf");
var ViewConsole = /** @class */ (function () {
    function ViewConsole(libros, estudiante) {
        this.libros = libros;
        this.estudiante = estudiante;
    }
    ViewConsole.prototype.showMenu = function () {
        console.log("---------------------------------");
        console.log("- Sistema de Biblioteca - v1.0.0");
        console.log("---------------------------------");
    };
    ViewConsole.prototype.selectedOption = function () {
        console.log("----------------------------------");
        console.log("Select  Option: ");
        console.log("1. Libros");
        console.log("2. Estudiantes");
        console.log("3. Biblioteca");
        console.log("0. Exit ");
        console.log("----------------------------------");
    };
    ViewConsole.prototype.selectedOptionBooks = function () {
        console.log("----------------------------------");
        console.log("Select  Option: ");
        console.log("1. Incluir en Catálogo");
        console.log("2. Eliminar Libros");
        console.log("3. Actualizar Libros");
        console.log("4. Mostrar Libros");
        console.log("0. Exit ");
        console.log("----------------------------------");
    };
    ViewConsole.prototype.selectedOptionStudents = function () {
        console.log("----------------------------------");
        console.log("Select  Option: ");
        console.log("1. Agregar Estudiante");
        console.log("2. Eliminar Estudiante");
        console.log("3. Actualizar Estudiante");
        console.log("4. Mostrar Estudiantes");
        console.log("0. Exit ");
        console.log("----------------------------------");
    };
    ViewConsole.prototype.selectOptionUpdateBooks = function () {
        console.log("----------------------------------");
        console.log(" Que opcion de actualizar la información del libro desea?");
        console.log("1. Actualizar toda la información del libro");
        console.log("2. Actualizar solo el Titulo");
        console.log("3. Actualizar solo el Autor");
        console.log("----------------------------------");
    };
    ViewConsole.prototype.selectOptionUpdateStudents = function () {
        console.log("----------------------------------");
        console.log(" Que opcion de actualizar la información del Estudiante desea?");
        console.log("1. Actualizar toda la información del Estudiante");
        console.log("2. Actualizar solo la identificacion");
        console.log("3. Actualizar solo el Nombre");
        console.log("4. Actualizar solo los Apellidos");
        console.log("5. Actualizar solo la direccion");
        console.log("----------------------------------");
    };
    ViewConsole.prototype.selectOptionLending = function () {
        console.log("----------------------------------");
        console.log(" Que opcion de Proceso desea tomar?");
        console.log("1. Prestar un libro");
        console.log("2. Mostrar prestamo");
        console.log("3. Devolver un Libro");
        console.log("4. Mostrar Estudiantes y libros!");
        console.log("----------------------------------");
    };
    ViewConsole.prototype.processSelectedOption = function () {
        var selectedOption;
        do {
            selectedOption = scanf('%d');
            switch (selectedOption) {
                case 1:
                    console.log("Seleccionaste la Opción De Libros");
                    this.selectedOptionBooks();
                    this.processSelectedOptionBooks();
                    this.showMenu();
                    this.selectedOption();
                    break;
                case 2:
                    console.log("Seleccionaste la Opción De Estudiantes");
                    this.selectedOptionStudents();
                    this.processSelectedOptionStudent();
                    this.showMenu();
                    this.selectedOption();
                    break;
                case 3:
                    console.log("Seleccionaste la Opción De Biblioteca");
                    this.selectOptionLending();
                    this.processSelectedOptionLending();
                    this.selectedOption();
                    break;
                case 0:
                    console.log("Saliendo del programa");
                    this.showMenu();
                    this.selectedOption();
                    break;
                default:
                    this.showGenericError();
                    this.showMenu();
                    this.selectedOption();
            }
        } while (selectedOption !== 0);
    };
    ViewConsole.prototype.processSelectedOptionBooks = function () {
        var selectedOptionBookMenu;
        do {
            selectedOptionBookMenu = scanf('%d');
            switch (selectedOptionBookMenu) {
                case 1:
                    console.log("Seleccionaste la Opción De Incluir Libros");
                    console.log("Ingresa el Titulo Del Libro: ");
                    var title = scanf('%S');
                    console.log('Ingrese el autor del libro: ');
                    var author = scanf('%S');
                    var book = {
                        title: title,
                        author: author,
                        statusLean: false
                    };
                    if (this.libros.create(book)) {
                        console.log("Libro Guardado exitosamente");
                    }
                    else {
                        console.log("Ha ocurrido un error");
                    }
                    this.selectedOptionBooks();
                    break;
                case 2:
                    console.log("Seleccionaste Eliminar un Libro");
                    console.log("Lista de Libros");
                    console.table(this.libros.read());
                    console.log('Ingrese el indice que desea eliminar: ');
                    var librotoDelete = scanf('%d');
                    if (this.libros.remove(librotoDelete)) {
                        console.log("Libro eliminado exitosamente");
                    }
                    else {
                        console.log("No se encontró el Libro o no se pudo eliminar");
                    }
                    this.selectedOptionBooks();
                    break;
                case 3:
                    console.log("Seleccionaste Actualizar un Libro");
                    console.log("Lista de Libros");
                    this.selectOptionUpdateBooks();
                    this.processSelectedOptionUpdateBooks();
                    break;
                case 4:
                    console.log("Seleccionaste mostrar Libros");
                    console.log("Lista de Libros");
                    console.table(this.libros.read());
                    this.selectedOptionBooks();
                    break;
                case 0:
                    console.log("Saliendo de Libros");
                    this.selectedOptionBooks();
                    break;
                default:
                    this.showGenericError();
                    this.selectedOptionBooks();
            }
        } while (selectedOptionBookMenu !== 0);
    };
    ViewConsole.prototype.processSelectedOptionStudent = function () {
        var selectedOptionStudentsMenu;
        do {
            selectedOptionStudentsMenu = scanf('%d');
            switch (selectedOptionStudentsMenu) {
                case 1:
                    console.log("Seleccionaste Agregar un nuevo Estudiante");
                    console.log('Ingrese la identificación: ');
                    var identification = scanf('%d');
                    console.log('Ingrese el nombre: ');
                    var name_1 = scanf('%S');
                    console.log('Ingrese los apellidos: ');
                    var lastname = scanf('%S');
                    console.log('Ingrese su dirección: ');
                    var address = scanf('%S');
                    var student = {
                        identification: identification,
                        name: name_1,
                        lastname: lastname,
                        address: address,
                        hasBook: false,
                        leanBook: []
                    };
                    if (this.estudiante.create(student)) {
                        console.log("Estudiante Registrado exitosamente");
                    }
                    else {
                        console.log("Ha ocurrido un error");
                    }
                    this.selectedOptionStudents();
                    break;
                case 2:
                    console.log("Seleccionaste eliminar un Estudiante");
                    console.log("Lista de estudiantes");
                    console.table(this.estudiante.read());
                    console.log('Ingrese el indice del estudiante a eliminar: ');
                    var indexToDelete = scanf('%d');
                    if (this.estudiante.remove(indexToDelete)) {
                        console.log("Estudiante eliminado exitosamente");
                    }
                    else {
                        console.log("No se encontró el Estudiante o no se pudo eliminar");
                    }
                    this.selectedOptionStudents();
                    break;
                case 3:
                    console.log("Seleccionaste Actualizar un Estudiante");
                    console.log("Lista de estudiantes");
                    this.selectOptionUpdateStudents();
                    this.processSelectedOptionUpdateStudents();
                    this.selectedOptionStudents();
                    break;
                case 4:
                    console.log("Seleccionaste mostrar Estudiantes");
                    console.log("Lista de estudiantes");
                    console.table(this.estudiante.read());
                    this.selectedOptionStudents();
                    break;
                case 0:
                    console.log("Saliendo de Estudiantes");
                    this.selectedOptionStudents();
                    break;
                default:
                    this.showGenericError();
                    this.selectedOptionStudents();
            }
        } while (selectedOptionStudentsMenu !== 0);
    };
    ViewConsole.prototype.processSelectedOptionUpdateBooks = function () {
        var selectedOption;
        this.selectOptionUpdateBooks;
        selectedOption = scanf('%d');
        switch (selectedOption) {
            case 1:
                console.log("Seleccionaste Actualizar todos los datos");
                console.log('Lista de libros');
                console.table(this.libros.read());
                console.log("Ingresa el Indice Del Libro que desea actualizar?: ");
                var indexToUpdateAll = scanf('%d');
                console.log("Ingresa el Titulo Del Libro: ");
                var titleEditAll = scanf('%S');
                console.log('Ingrese el autor del libro: ');
                var authorEditAll = scanf('%S');
                var bookEditAll = {
                    title: titleEditAll,
                    author: authorEditAll,
                    statusLean: false
                };
                this.libros.update(indexToUpdateAll, bookEditAll);
                console.log("Libro actualizado exitosamente");
                console.table(this.libros.read());
                this.selectedOptionBooks();
                break;
            case 2:
                console.log("Seleccionaste Actualizar Titulo del libro");
                console.log('Lista de libros');
                console.table(this.libros.read());
                console.log("Ingresa el Indice Del Libro que desea actualizar?: ");
                var indexToUpdateTitle = scanf('%d');
                console.log("Ingresa el Titulo Del Libro: ");
                var titleEdit = scanf('%S');
                var array = this.libros.read();
                var booksSelectTitle = array[indexToUpdateTitle];
                var bookEditTitle = {
                    title: titleEdit,
                    author: booksSelectTitle.author,
                    statusLean: booksSelectTitle.statusLean
                };
                this.libros.update(indexToUpdateTitle, bookEditTitle);
                console.log("Libro actualizado exitosamente");
                console.table(this.libros.read());
                this.selectedOptionBooks();
                break;
            case 3:
                console.log("Seleccionaste Actualizar Author del libro");
                console.log('Lista de libros');
                console.table(this.libros.read());
                console.log("Ingresa el Indice Del Libro que desea actualizar?: ");
                var indexToUpdateAuthor = scanf('%d');
                console.log("Ingresa el Author Del Libro: ");
                var authorEdit = scanf('%S');
                var arrayFindIndexAuthor = this.libros.read();
                var booksSelectAuthor = arrayFindIndexAuthor[indexToUpdateAuthor];
                var bookEditAuthor = {
                    title: booksSelectAuthor.title,
                    author: authorEdit,
                    statusLean: booksSelectAuthor.statusLean
                };
                this.libros.update(indexToUpdateAuthor, bookEditAuthor);
                console.log("Libro actualizado exitosamente");
                console.table(this.libros.read());
                this.selectedOptionBooks();
                break;
            default:
                this.showGenericError();
        }
    };
    ViewConsole.prototype.processSelectedOptionUpdateStudents = function () {
        var selectedOption;
        this.selectOptionUpdateBooks;
        selectedOption = scanf('%d');
        switch (selectedOption) {
            case 1:
                console.log("Seleccionaste Actualizar todos los datos");
                console.log('Lista de Estudiantes');
                console.table(this.estudiante.read());
                console.log("Ingresa el Indice Del Estudiante que desea actualizar?: ");
                var indexToUpdateAll = scanf('%d');
                console.log('Ingrese la identificación: ');
                var identificationUpdate = scanf('%d');
                console.log('Ingrese el nombre: ');
                var nameUpdate = scanf('%S');
                console.log('Ingrese los apellidos: ');
                var lastnameUpdate = scanf('%S');
                console.log('Ingrese su dirección: ');
                var addressUpdate = scanf('%S');
                var studentUpdateALL = {
                    identification: identificationUpdate,
                    name: nameUpdate,
                    lastname: lastnameUpdate,
                    address: addressUpdate,
                    hasBook: false,
                    leanBook: []
                };
                this.estudiante.update(indexToUpdateAll, studentUpdateALL);
                console.log("Estudiante actualizado exitosamente");
                console.table(this.estudiante.read());
                break;
            case 2:
                console.log("Seleccionaste Actualizar Solo la identificacion");
                console.log('Lista de Estudiantes');
                console.table(this.estudiante.read());
                console.log("Ingresa el Indice Del Estudiante que desea actualizar?: ");
                var indexToUpdateId = scanf('%d');
                console.log('Ingrese la identificación: ');
                var identificationEdit = scanf('%d');
                var arrayFindIndexId = this.estudiante.read();
                var studentsSelectId = arrayFindIndexId[indexToUpdateId];
                var studentUpdateId = {
                    identification: identificationEdit,
                    name: studentsSelectId.name,
                    lastname: studentsSelectId.lastname,
                    address: studentsSelectId.address,
                    hasBook: studentsSelectId.hasBook,
                    leanBook: studentsSelectId.leanBook
                };
                this.estudiante.update(indexToUpdateId, studentUpdateId);
                console.log("Estudiante actualizado exitosamente");
                console.table(this.estudiante.read());
                break;
            case 3:
                console.log("Seleccionaste Actualizar Solo el Nombre");
                console.log('Lista de Estudiantes');
                console.table(this.estudiante.read());
                console.log("Ingresa el Indice Del Estudiante que desea actualizar?: ");
                var indexToUpdateName = scanf('%S');
                console.log('Ingrese el nombre: ');
                var nameEdit = scanf('%d');
                var arrayFindIndexName = this.estudiante.read();
                var StudentSelectName = arrayFindIndexName[indexToUpdateName];
                var studentUpdateName = {
                    identification: StudentSelectName.identification,
                    name: nameEdit,
                    lastname: StudentSelectName.lastname,
                    address: StudentSelectName.address,
                    hasBook: StudentSelectName.hasBook,
                    leanBook: StudentSelectName.leanBook
                };
                this.estudiante.update(indexToUpdateName, studentUpdateName);
                console.log("Estudiante actualizado exitosamente");
                console.table(this.estudiante.read());
                break;
            case 4:
                console.log("Seleccionaste Actualizar Solo Los Apellidos");
                console.log('Lista de Estudiantes');
                console.table(this.estudiante.read());
                console.log("Ingresa el Indice Del Estudiante que desea actualizar?: ");
                var indexToUpdateLastname = scanf('%S');
                console.log('Ingrese Los Apellidos: ');
                var lastnameEdit = scanf('%S');
                var arrayFindIndexLastname = this.estudiante.read();
                var studentSelectLastname = arrayFindIndexLastname[indexToUpdateLastname];
                var studenUpdateLastname = {
                    identification: studentSelectLastname.identification,
                    name: studentSelectLastname.name,
                    lastname: lastnameEdit,
                    address: studentSelectLastname.address,
                    hasBook: studentSelectLastname.hasBook,
                    leanBook: studentSelectLastname.leanBook
                };
                this.estudiante.update(indexToUpdateLastname, studenUpdateLastname);
                console.log("Estudiante actualizado exitosamente");
                console.table(this.estudiante.read());
                break;
            case 5:
                console.log("Seleccionaste Actualizar Solo La direccion");
                console.log('Lista de Estudiantes');
                console.table(this.estudiante.read());
                console.log("Ingresa el Indice Del Estudiante que desea actualizar?: ");
                var indexToUpdateAddress = scanf('%S');
                console.log('Ingrese La direccion: ');
                var addressEdit = scanf('%S');
                var arrayFindIndexAddress = this.estudiante.read();
                var studentSelectAddress = arrayFindIndexAddress[indexToUpdateAddress];
                var studenUpdateAddress = {
                    identification: studentSelectAddress.identification,
                    name: studentSelectAddress.name,
                    lastname: studentSelectAddress.lastname,
                    address: addressEdit,
                    hasBook: studentSelectAddress.hasBook,
                    leanBook: studentSelectAddress.leanBook
                };
                this.estudiante.update(indexToUpdateAddress, studenUpdateAddress);
                console.log("Estudiante actualizado exitosamente");
                console.table(this.estudiante.read());
                break;
            default:
                this.showGenericError();
        }
    };
    ViewConsole.prototype.processSelectedOptionLending = function () {
        var selectedOption;
        this.selectOptionUpdateBooks;
        selectedOption = scanf('%d');
        switch (selectedOption) {
            case 1:
                console.log("Seleccionaste hacer un préstamo");
                console.table(this.libros.read());
                console.log("Ingrese el índice del libro que desea prestar: ");
                var bookIndex = scanf('%d');
                var selectedBook = this.libros.read()[bookIndex];
                console.table(this.estudiante.read());
                if (selectedBook) {
                    console.log("Ingrese el índice del estudiante al que desea prestar el libro: ");
                    var studentIndex_1 = scanf('%d');
                    var selectedStudent_1 = this.estudiante.read()[studentIndex_1];
                    if (selectedStudent_1) {
                        if (!selectedBook.statusLean) {
                            selectedBook.statusLean = true;
                            selectedStudent_1.hasBook = true;
                            selectedStudent_1.leanBook.push(selectedBook);
                            console.log("El libro \"".concat(selectedBook.title, "\" se ha prestado a ").concat(selectedStudent_1.name, " ").concat(selectedStudent_1.lastname, " exitosamente."));
                        }
                        else {
                            console.log("El libro seleccionado ya está prestado.");
                        }
                    }
                    else {
                        console.log("El estudiante seleccionado no existe.");
                    }
                }
                else {
                    console.log("El libro seleccionado no existe.");
                }
                break;
            case 2:
                console.log("Seleccionaste mostrar libros prestados por estudiantes");
                console.table(this.estudiante.read());
                console.log("Ingrese el índice del estudiante para ver los libros prestados: ");
                var studentIndex = scanf('%d');
                var selectedStudent = this.estudiante.read()[studentIndex];
                if (selectedStudent) {
                    if (selectedStudent.leanBook.length > 0) {
                        console.log("Libros prestados a ".concat(selectedStudent.name, " ").concat(selectedStudent.lastname, ":"));
                        selectedStudent.leanBook.forEach(function (book, index) {
                            console.log("".concat(index, ". ").concat(book.title, " - ").concat(book.author));
                        });
                    }
                    else {
                        console.log("El estudiante ".concat(selectedStudent.name, " ").concat(selectedStudent.lastname, " no tiene libros prestados."));
                    }
                }
                else {
                    console.log("El estudiante seleccionado no existe.");
                }
                break;
            case 3:
                console.log("Seleccionaste recibir libro prestado de estudiante");
                console.table(this.estudiante.read());
                console.log("Ingrese el índice del estudiante del que desea regresar un libro prestado: ");
                var studentIndexdelete = scanf('%d');
                var selectedStudendelete = this.estudiante.read()[studentIndexdelete];
                if (selectedStudendelete) {
                    if (selectedStudendelete.leanBook.length > 0) {
                        console.log("Libros prestados a ".concat(selectedStudendelete.name, " ").concat(selectedStudendelete.lastname, ":"));
                        selectedStudendelete.leanBook.forEach(function (book, index) {
                            console.log("".concat(index, ". ").concat(book.title, " - ").concat(book.author));
                        });
                        console.log("Ingrese el índice del libro que desea regresar: ");
                        var bookIndex_1 = scanf('%d');
                        if (bookIndex_1 >= 0 && bookIndex_1 < selectedStudendelete.leanBook.length) {
                            selectedStudendelete.leanBook.splice(bookIndex_1, 1);
                            console.table(this.libros.read());
                            console.log('Por ultimo necesitamos confirmar el libro que se desea entregar');
                            console.log("Ingrese el índice del libro que desea Confirmar: ");
                            var bookIndexdelete = scanf('%d');
                            var selectedBookdelete = this.libros.read()[bookIndexdelete];
                            selectedBookdelete.statusLean = false;
                            if (selectedStudendelete.leanBook.length == 0) {
                                selectedStudendelete.hasBook = false;
                            }
                            console.log("Libro regresado exitosamente.");
                        }
                        else {
                            console.log("Índice de libro no válido.");
                        }
                    }
                    else {
                        console.log("El estudiante ".concat(selectedStudendelete.name, " ").concat(selectedStudendelete.lastname, " no tiene libros prestados."));
                    }
                }
                else {
                    console.log("El estudiante seleccionado no existe.");
                }
                break;
            case 4:
                console.table(this.libros.read());
                console.table(this.estudiante.read());
                break;
            default:
                this.showGenericError();
        }
    };
    ViewConsole.prototype.showGenericError = function () {
        console.log("Opción no válida. Inténtalo de nuevo.");
    };
    return ViewConsole;
}());
exports.ViewConsole = ViewConsole;
