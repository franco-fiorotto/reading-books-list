import { Book } from "./book";

export class Library {
  private _books: Book[];

  private constructor({ books }: { books: Book[] }) {
    this._books = books;
  }

  static create({ books }: { books: Book[] }) {
    return new Library({ books });
  }

  get books() {
    return this._books;
  }
}
