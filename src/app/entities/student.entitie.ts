import { Book } from "./book.entitie"

export type Student = {
    identification: number
    name: string
    lastname: string
    address: string
    hasBook: boolean
    leanBook: Array<Book>
}