import { Book } from "../entities/book.entitie";
import { CrudBase } from '../abstractions/crud-base.abstract';

export interface BooksCrud extends CrudBase<Book> { }