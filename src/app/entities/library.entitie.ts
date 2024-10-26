import { Book } from "./book.entitie";
import { Student } from './student.entitie';

export type Library = {
    books: Array<Book>;
    students: Array<Student>
}