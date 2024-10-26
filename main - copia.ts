/* //entities
type Book = {
    title: string
    author: string
    status: boolean
}

type Student = {
    identification: number
    name: string
    lastname: string
    address: string
    hasBook: boolean
    leanBook: Array<Book>
}

type LeanProcess = {
    student: Student
    deliverDate: Date
}

type Library = {
    books: Array<Book>;
    students: Array<Student>
}

//################################################################
//################################################################

//class abstract
abstract class LibraryProcess {
    abstract isBookAvailable(book: Book): boolean
    abstract isStudentRegistered(student: Student): boolean
    abstract toLean(student: Student): void
    abstract toClaim(student: Student): void
}

abstract class CrudBase<T> {
    abstract create(element: T): boolean
    abstract read(): Array<T>
    abstract update(element: T): void
    abstract remove(element: T): boolean
}

//class
class Books implements BooksCrud {

    create(book: Book): boolean {
        return true
    }

    read(): Book[] {
        return [];
    }

    update(book: Book): void {
        console.log(book)
    }

    remove(book: Book): boolean {
        return true;
    }
}

class Students implements StudentCrud {

    create(student: Student): boolean {
        return true
    }

    read(): Student[] {
        return []
    }

    update(student: Student): void {
        console.log(student);
    }

    remove(student: Student): boolean {
        return true;
    }
}

class UniversityLibrary extends LibraryProcess {
    private isDelivered!: boolean;

    isBookAvailable(book: Book): boolean {
        return true;
    }

    isStudentRegistered(student: Student): boolean {
        return true;
    }

    toLean(student: Student): void {
        console.log("prestado!")
    }

    toClaim(student: Student): void {
        console.log("reclamar!");
    }
}

//interface
interface BooksCrud extends CrudBase<Book> { }
interface StudentCrud extends CrudBase<Student> { } */