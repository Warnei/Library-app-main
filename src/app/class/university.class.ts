import { Book } from "../entities/book.entitie";
import { Student } from "../entities/student.entitie";
import { LibraryProcess } from '../abstractions/library-process.abstract';

export class UniversityLibrary extends LibraryProcess {
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