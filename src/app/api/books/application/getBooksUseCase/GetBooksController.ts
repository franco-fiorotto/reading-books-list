import LibraryMapper from "../../infraestructure/LibraryMapper";
import { Book } from "../../model/book";
import GetBooksUseCase from "./GetBooksUseCase";

type GetBooksControllerResponse = {
  books: Book[];
};

export default function GetBooksController(): GetBooksControllerResponse {
  const { execute } = GetBooksUseCase();

  const booksData = execute();

  return {
    books: LibraryMapper.toDomain(booksData).books,
  };
}
