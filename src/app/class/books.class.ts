import { title } from 'process';
import { BooksCrud } from '../interfaces/books.interface';
import { Book } from './../entities/book.entitie';

export class Books implements BooksCrud {
    private books: Array<Book> = [];

    create(book: Book): boolean {
        return this.books.push(book) > 0;
    }

    read(): Book[] {
        return this.books;
    }

    update(index: number, book: Book): void {
        this.books.splice(index, 1, book);
    }

    remove(index: number): boolean {
        this.books.splice(index, 1);
        return  true;
    }
}