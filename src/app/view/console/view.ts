import { Book } from '../../entities/book.entitie';
import { BooksCrud } from "../../interfaces/books.interface";
import { StudentCrud } from "../../interfaces/student.interface";
import { Student } from '../../entities/student.entitie';
import { UniversityLibrary } from '../../class/university.class';
var scanf = require("scanf");

export class ViewConsole {
    private libros!: BooksCrud;
    private estudiante!: StudentCrud;

    constructor(libros: BooksCrud, estudiante: StudentCrud) {
        this.libros = libros;
        this.estudiante = estudiante;
    }

    showMenu(): void {
        console.log("---------------------------------")
        console.log("- Sistema de Biblioteca - v1.0.0")
        console.log("---------------------------------")
    }

    selectedOption(): void {
        console.log("----------------------------------")
        console.log("Select  Option: ")
        console.log("1. Libros");
        console.log("2. Estudiantes");
        console.log("3. Biblioteca");
        console.log("0. Exit ");
        console.log("----------------------------------")
    }

    selectedOptionBooks(): void {
        console.log("----------------------------------")
        console.log("Select  Option: ")
        console.log("1. Incluir en Catálogo");
        console.log("2. Eliminar Libros");
        console.log("3. Actualizar Libros");
        console.log("4. Mostrar Libros");
        console.log("0. Exit ");
        console.log("----------------------------------")
    }

    selectedOptionStudents(): void {
        console.log("----------------------------------")
        console.log("Select  Option: ")
        console.log("1. Agregar Estudiante");
        console.log("2. Eliminar Estudiante");
        console.log("3. Actualizar Estudiante");
        console.log("4. Mostrar Estudiantes");
        console.log("0. Exit ");
        console.log("----------------------------------")
    }

    selectOptionUpdateBooks(): void {
        console.log("----------------------------------")
        console.log(" Que opcion de actualizar la información del libro desea?")
        console.log("1. Actualizar toda la información del libro")
        console.log("2. Actualizar solo el Titulo");
        console.log("3. Actualizar solo el Autor");
        console.log("----------------------------------")
    }

    selectOptionUpdateStudents(): void {
        console.log("----------------------------------")
        console.log(" Que opcion de actualizar la información del Estudiante desea?")
        console.log("1. Actualizar toda la información del Estudiante")
        console.log("2. Actualizar solo la identificacion");
        console.log("3. Actualizar solo el Nombre");
        console.log("4. Actualizar solo los Apellidos");
        console.log("5. Actualizar solo la direccion");
        console.log("----------------------------------")
    }

    selectOptionLending(): void {
        console.log("----------------------------------")
        console.log(" Que opcion de Proceso desea tomar?")
        console.log("1. Prestar un libro")
        console.log("2. Mostrar prestamo");
        console.log("3. Devolver un Libro")
        console.log("4. Mostrar Estudiantes y libros!")
        console.log("----------------------------------")
    }

    processSelectedOption(): void {
        let selectedOption: number;

        do {
            selectedOption = scanf('%d');

            switch (selectedOption) {
                case 1:
                    console.log("Seleccionaste la Opción De Libros")
                    this.selectedOptionBooks();
                    this.processSelectedOptionBooks();
                    this.showMenu();
                    this.selectedOption();
                    break;
                case 2:
                    console.log("Seleccionaste la Opción De Estudiantes")
                    this.selectedOptionStudents();
                    this.processSelectedOptionStudent();
                    this.showMenu();
                    this.selectedOption();
                    break;
                case 3:
                    console.log("Seleccionaste la Opción De Biblioteca")
                    this.selectOptionLending();
                    this.processSelectedOptionLending();
                    this.selectedOption();
                    break;
                case 0:
                    console.log("Saliendo del programa")
                    this.showMenu();
                    this.selectedOption();
                    break;
                default:
                    this.showGenericError();
                    this.showMenu();
                    this.selectedOption();
            }
        } while (selectedOption !== 0);
    }

    processSelectedOptionBooks(): void {
        let selectedOptionBookMenu: number;

        do {
            selectedOptionBookMenu = scanf('%d');

            switch (selectedOptionBookMenu) {
                case 1:
                    console.log("Seleccionaste la Opción De Incluir Libros")
                    console.log("Ingresa el Titulo Del Libro: ");
                    const title = scanf('%S');
                    console.log('Ingrese el autor del libro: ');
                    const author = scanf('%S')

                    let book: Book = {
                        title: title,
                        author: author,
                        statusLean: false
                    }

                    if (this.libros.create(book)) {
                        console.log("Libro Guardado exitosamente");
                    } else {
                        console.log("Ha ocurrido un error")
                    }
                    this.selectedOptionBooks();
                    break;
                case 2:
                    console.log("Seleccionaste Eliminar un Libro");
                    console.log("Lista de Libros");
                    console.table(this.libros.read());
                    console.log('Ingrese el indice que desea eliminar: ')
                    const librotoDelete = scanf('%d');

                    if (this.libros.remove(librotoDelete)) {
                        console.log("Libro eliminado exitosamente");
                    } else {
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
                    console.log("Saliendo de Libros")
                    this.selectedOptionBooks();
                    break;
                default:
                    this.showGenericError()
                    this.selectedOptionBooks();
            }
        } while (selectedOptionBookMenu !== 0);
    }

    processSelectedOptionStudent(): void {
        let selectedOptionStudentsMenu: number;

        do {
            selectedOptionStudentsMenu = scanf('%d');

            switch (selectedOptionStudentsMenu) {
                case 1:
                    console.log("Seleccionaste Agregar un nuevo Estudiante")
                    console.log('Ingrese la identificación: ')
                    const identification = scanf('%d');
                    console.log('Ingrese el nombre: ')
                    const name = scanf('%S');
                    console.log('Ingrese los apellidos: ')
                    const lastname = scanf('%S');
                    console.log('Ingrese su dirección: ')
                    const address = scanf('%S');

                    let student: Student = {
                        identification: identification,
                        name: name,
                        lastname: lastname,
                        address: address,
                        hasBook: false,
                        leanBook: []
                    }

                    if (this.estudiante.create(student)) {
                        console.log("Estudiante Registrado exitosamente");
                    } else {
                        console.log("Ha ocurrido un error")
                    }
                    this.selectedOptionStudents();
                    break;
                case 2:
                    console.log("Seleccionaste eliminar un Estudiante");
                    console.log("Lista de estudiantes");
                    console.table(this.estudiante.read())
                    console.log('Ingrese el indice del estudiante a eliminar: ');
                    const indexToDelete = scanf('%d');
                    if (this.estudiante.remove(indexToDelete)) {
                        console.log("Estudiante eliminado exitosamente");
                    } else {
                        console.log("No se encontró el Estudiante o no se pudo eliminar");
                    }
                    this.selectedOptionStudents();
                    break;
                case 3:
                    console.log("Seleccionaste Actualizar un Estudiante")
                    console.log("Lista de estudiantes");
                    this.selectOptionUpdateStudents();
                    this.processSelectedOptionUpdateStudents();
                    this.selectedOptionStudents();
                    break;
                case 4:
                    console.log("Seleccionaste mostrar Estudiantes");
                    console.log("Lista de estudiantes");
                    console.table(this.estudiante.read())
                    this.selectedOptionStudents()
                    break;
                case 0:
                    console.log("Saliendo de Estudiantes")
                    this.selectedOptionStudents();
                    break;
                default:
                    this.showGenericError()
                    this.selectedOptionStudents();
            }
        } while (selectedOptionStudentsMenu !== 0);
    }

    processSelectedOptionUpdateBooks(): void {
        let selectedOption: number;
        this.selectOptionUpdateBooks
        selectedOption = scanf('%d');

        switch (selectedOption) {
            case 1:
                console.log("Seleccionaste Actualizar todos los datos")
                console.log('Lista de libros')
                console.table(this.libros.read());
                console.log("Ingresa el Indice Del Libro que desea actualizar?: ");
                const indexToUpdateAll = scanf('%d');
                console.log("Ingresa el Titulo Del Libro: ");
                const titleEditAll = scanf('%S');
                console.log('Ingrese el autor del libro: ');
                const authorEditAll = scanf('%S')

                let bookEditAll: Book = {
                    title: titleEditAll,
                    author: authorEditAll,
                    statusLean: false
                }
                this.libros.update(indexToUpdateAll, bookEditAll)
                console.log("Libro actualizado exitosamente");
                console.table(this.libros.read());
                this.selectedOptionBooks();
                break;
            case 2:
                console.log("Seleccionaste Actualizar Titulo del libro")
                console.log('Lista de libros')
                console.table(this.libros.read())
                console.log("Ingresa el Indice Del Libro que desea actualizar?: ");
                const indexToUpdateTitle = scanf('%d');
                console.log("Ingresa el Titulo Del Libro: ");
                const titleEdit = scanf('%S');
                let array = this.libros.read()
                let booksSelectTitle: Book = array[indexToUpdateTitle]

                let bookEditTitle: Book = {
                    title: titleEdit,
                    author: booksSelectTitle.author,
                    statusLean: booksSelectTitle.statusLean
                }
                this.libros.update(indexToUpdateTitle, bookEditTitle)
                console.log("Libro actualizado exitosamente");
                console.table(this.libros.read());
                this.selectedOptionBooks();
                break;
            case 3:
                console.log("Seleccionaste Actualizar Author del libro")
                console.log('Lista de libros')
                console.table(this.libros.read())
                console.log("Ingresa el Indice Del Libro que desea actualizar?: ");
                const indexToUpdateAuthor = scanf('%d');
                console.log("Ingresa el Author Del Libro: ");
                const authorEdit = scanf('%S');
                let arrayFindIndexAuthor = this.libros.read()
                let booksSelectAuthor: Book = arrayFindIndexAuthor[indexToUpdateAuthor]

                let bookEditAuthor: Book = {
                    title: booksSelectAuthor.title,
                    author: authorEdit,
                    statusLean: booksSelectAuthor.statusLean
                }
                this.libros.update(indexToUpdateAuthor, bookEditAuthor)
                console.log("Libro actualizado exitosamente");
                console.table(this.libros.read());
                this.selectedOptionBooks();
                break;
            default:
                this.showGenericError();
        }
    }

    processSelectedOptionUpdateStudents(): void {
        let selectedOption: number;
        this.selectOptionUpdateBooks
        selectedOption = scanf('%d');

        switch (selectedOption) {
            case 1:
                console.log("Seleccionaste Actualizar todos los datos")
                console.log('Lista de Estudiantes')
                console.table(this.estudiante.read());
                console.log("Ingresa el Indice Del Estudiante que desea actualizar?: ");
                const indexToUpdateAll = scanf('%d');
                console.log('Ingrese la identificación: ')
                const identificationUpdate = scanf('%d');
                console.log('Ingrese el nombre: ')
                const nameUpdate = scanf('%S');
                console.log('Ingrese los apellidos: ')
                const lastnameUpdate = scanf('%S');
                console.log('Ingrese su dirección: ')
                const addressUpdate = scanf('%S');

                let studentUpdateALL: Student = {
                    identification: identificationUpdate,
                    name: nameUpdate,
                    lastname: lastnameUpdate,
                    address: addressUpdate,
                    hasBook: false,
                    leanBook: []
                }
                this.estudiante.update(indexToUpdateAll, studentUpdateALL)
                console.log("Estudiante actualizado exitosamente");
                console.table(this.estudiante.read());
                break;
            case 2:
                console.log("Seleccionaste Actualizar Solo la identificacion")
                console.log('Lista de Estudiantes')
                console.table(this.estudiante.read());
                console.log("Ingresa el Indice Del Estudiante que desea actualizar?: ");
                const indexToUpdateId = scanf('%d');
                console.log('Ingrese la identificación: ')
                const identificationEdit = scanf('%d');
                let arrayFindIndexId = this.estudiante.read()
                let studentsSelectId: Student = arrayFindIndexId[indexToUpdateId]

                let studentUpdateId: Student = {
                    identification: identificationEdit,
                    name: studentsSelectId.name,
                    lastname: studentsSelectId.lastname,
                    address: studentsSelectId.address,
                    hasBook: studentsSelectId.hasBook,
                    leanBook: studentsSelectId.leanBook
                }
                this.estudiante.update(indexToUpdateId, studentUpdateId)
                console.log("Estudiante actualizado exitosamente");
                console.table(this.estudiante.read());
                break;
            case 3:
                console.log("Seleccionaste Actualizar Solo el Nombre")
                console.log('Lista de Estudiantes')
                console.table(this.estudiante.read());
                console.log("Ingresa el Indice Del Estudiante que desea actualizar?: ");
                const indexToUpdateName = scanf('%S');
                console.log('Ingrese el nombre: ')
                const nameEdit = scanf('%d');
                let arrayFindIndexName = this.estudiante.read()
                let StudentSelectName: Student = arrayFindIndexName[indexToUpdateName]

                let studentUpdateName: Student = {
                    identification: StudentSelectName.identification,
                    name: nameEdit,
                    lastname: StudentSelectName.lastname,
                    address: StudentSelectName.address,
                    hasBook: StudentSelectName.hasBook,
                    leanBook: StudentSelectName.leanBook
                }
                this.estudiante.update(indexToUpdateName, studentUpdateName)
                console.log("Estudiante actualizado exitosamente");
                console.table(this.estudiante.read());
                break;
            case 4:
                console.log("Seleccionaste Actualizar Solo Los Apellidos")
                console.log('Lista de Estudiantes')
                console.table(this.estudiante.read());
                console.log("Ingresa el Indice Del Estudiante que desea actualizar?: ");
                const indexToUpdateLastname = scanf('%S');
                console.log('Ingrese Los Apellidos: ')
                const lastnameEdit = scanf('%S');
                let arrayFindIndexLastname = this.estudiante.read();
                let studentSelectLastname: Student = arrayFindIndexLastname[indexToUpdateLastname]

                let studenUpdateLastname: Student = {
                    identification: studentSelectLastname.identification,
                    name: studentSelectLastname.name,
                    lastname: lastnameEdit,
                    address: studentSelectLastname.address,
                    hasBook: studentSelectLastname.hasBook,
                    leanBook: studentSelectLastname.leanBook
                }
                this.estudiante.update(indexToUpdateLastname, studenUpdateLastname)
                console.log("Estudiante actualizado exitosamente");
                console.table(this.estudiante.read());
                break;
            case 5:
                console.log("Seleccionaste Actualizar Solo La direccion")
                console.log('Lista de Estudiantes')
                console.table(this.estudiante.read());
                console.log("Ingresa el Indice Del Estudiante que desea actualizar?: ");
                const indexToUpdateAddress = scanf('%S');
                console.log('Ingrese La direccion: ')
                const addressEdit = scanf('%S');
                let arrayFindIndexAddress = this.estudiante.read();
                let studentSelectAddress: Student = arrayFindIndexAddress[indexToUpdateAddress]

                let studenUpdateAddress: Student = {
                    identification: studentSelectAddress.identification,
                    name: studentSelectAddress.name,
                    lastname: studentSelectAddress.lastname,
                    address: addressEdit,
                    hasBook: studentSelectAddress.hasBook,
                    leanBook: studentSelectAddress.leanBook
                }
                this.estudiante.update(indexToUpdateAddress, studenUpdateAddress)
                console.log("Estudiante actualizado exitosamente");
                console.table(this.estudiante.read());
                break;
            default:
                this.showGenericError();
        }
    }

    processSelectedOptionLending(): void {
        let selectedOption: number;
        this.selectOptionUpdateBooks
        selectedOption = scanf('%d');

        switch (selectedOption) {
            case 1:
                console.log("Seleccionaste hacer un préstamo")
                console.table(this.libros.read());
                console.log("Ingrese el índice del libro que desea prestar: ");
                const bookIndex = scanf('%d');
                const selectedBook: Book = this.libros.read()[bookIndex];
                console.table(this.estudiante.read());

                if (selectedBook) {
                    console.log("Ingrese el índice del estudiante al que desea prestar el libro: ");
                    const studentIndex = scanf('%d');
                    const selectedStudent: Student = this.estudiante.read()[studentIndex];

                    if (selectedStudent) {
                        if (!selectedBook.statusLean) {
                            selectedBook.statusLean = true;
                            selectedStudent.hasBook = true;
                            selectedStudent.leanBook.push(selectedBook);
                            console.log(`El libro "${selectedBook.title}" se ha prestado a ${selectedStudent.name} ${selectedStudent.lastname} exitosamente.`);
                        } else {
                            console.log("El libro seleccionado ya está prestado.");
                        }
                    } else {
                        console.log("El estudiante seleccionado no existe.");
                    }
                } else {
                    console.log("El libro seleccionado no existe.");
                }
                break;
            case 2:
                console.log("Seleccionaste mostrar libros prestados por estudiantes");
                console.table(this.estudiante.read());
                console.log("Ingrese el índice del estudiante para ver los libros prestados: ");
                const studentIndex = scanf('%d');
                const selectedStudent: Student = this.estudiante.read()[studentIndex];

                if (selectedStudent) {
                    if (selectedStudent.leanBook.length > 0) {
                        console.log(`Libros prestados a ${selectedStudent.name} ${selectedStudent.lastname}:`);
                        selectedStudent.leanBook.forEach((book, index) => {
                            console.log(`${index}. ${book.title} - ${book.author}`);
                        });
                    } else {
                        console.log(`El estudiante ${selectedStudent.name} ${selectedStudent.lastname} no tiene libros prestados.`);
                    }
                } else {
                    console.log("El estudiante seleccionado no existe.");
                }
                break;
            case 3:
                console.log("Seleccionaste recibir libro prestado de estudiante");
                console.table(this.estudiante.read());
                console.log("Ingrese el índice del estudiante del que desea regresar un libro prestado: ");
                const studentIndexdelete = scanf('%d');
                const selectedStudendelete: Student = this.estudiante.read()[studentIndexdelete];

                if (selectedStudendelete) {
                    if (selectedStudendelete.leanBook.length > 0) {
                        console.log(`Libros prestados a ${selectedStudendelete.name} ${selectedStudendelete.lastname}:`);
                        selectedStudendelete.leanBook.forEach((book, index) => {
                            console.log(`${index}. ${book.title} - ${book.author}`);
                        });
                        console.log("Ingrese el índice del libro que desea regresar: ");
                        const bookIndex = scanf('%d');

                        if (bookIndex >= 0 && bookIndex < selectedStudendelete.leanBook.length) {
                            selectedStudendelete.leanBook.splice(bookIndex, 1);
                            console.table(this.libros.read());
                            console.log('Por ultimo necesitamos confirmar el libro que se desea entregar')
                            console.log("Ingrese el índice del libro que desea Confirmar: ");
                            const bookIndexdelete = scanf('%d');
                            const selectedBookdelete: Book = this.libros.read()[bookIndexdelete];
                            selectedBookdelete.statusLean = false;
                            if (selectedStudendelete.leanBook.length == 0) {
                                selectedStudendelete.hasBook = false;
                            }
                            console.log("Libro regresado exitosamente.");
                        } else {
                            console.log("Índice de libro no válido.");
                        }
                    } else {
                        console.log(`El estudiante ${selectedStudendelete.name} ${selectedStudendelete.lastname} no tiene libros prestados.`);
                    }
                } else {
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
    }

    private showGenericError(): void {
        console.log("Opción no válida. Inténtalo de nuevo.")
    }
}