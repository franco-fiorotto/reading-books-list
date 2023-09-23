import { Book } from "@/app/api/books/model/book";
import { Author } from "../model/author";
import AuthorMapper from "./AuthorMapper";

export default class BooksMapper {
  static toDomain(raw: any): Book {
    return Book.create({
      title: raw.title,
      pages: raw.pages,
      genre: raw.genre,
      cover: raw.cover,
      synopsis: raw.synopsis,
      year: raw.year,
      ISBN: raw.ISBN,
      author: AuthorMapper.toDomain(raw.author),
    });
  }
}
