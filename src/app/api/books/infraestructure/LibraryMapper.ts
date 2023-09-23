import { Library } from "../model/library";
import BooksMapper from "./BooksMapper";

export default class LibraryMapper {
  static toDomain(raw: any): Library {
    return Library.create({
      books: raw.books.map((book: any) => {
        const mappedBook = BooksMapper.toDomain(book);
        return {
          title: mappedBook.title,
          pages: mappedBook.pages,
          genre: mappedBook.genre,
          cover: mappedBook.cover,
          synopsis: mappedBook.synopsis,
          year: mappedBook.year,
          ISBN: mappedBook.ISBN,
          author: {
            name: mappedBook.author.name,
            otherBooks: mappedBook.author.otherBooks,
          },
        };
      }),
    });
  }
}
