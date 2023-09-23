import { Author } from "./author";

export class Book {
  private _title: string;
  private _pages: number;
  private _genre: string;
  private _cover: string;
  private _synopsis: string;
  private _year: number;
  private _ISBN: string;
  private _author: Author;

  private constructor({
    title,
    pages,
    genre,
    cover,
    synopsis,
    year,
    ISBN,
    author,
  }: {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author: Author;
  }) {
    this._title = title;
    this._pages = pages;
    this._genre = genre;
    this._cover = cover;
    this._synopsis = synopsis;
    this._year = year;
    this._ISBN = ISBN;
    this._author = author;
  }

  static create({
    title,
    pages,
    genre,
    cover,
    synopsis,
    year,
    ISBN,
    author,
  }: {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author: Author;
  }) {
    return new Book({
      title,
      pages,
      genre,
      cover,
      synopsis,
      year,
      ISBN,
      author,
    });
  }

  get title() {
    return this._title;
  }

  get pages() {
    return this._pages;
  }

  get genre() {
    return this._genre;
  }

  get cover() {
    return this._cover;
  }

  get synopsis() {
    return this._synopsis;
  }

  get year() {
    return this._year;
  }

  get ISBN() {
    return this._ISBN;
  }

  get author() {
    return this._author;
  }
}
