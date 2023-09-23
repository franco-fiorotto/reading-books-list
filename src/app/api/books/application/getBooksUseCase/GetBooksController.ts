import LibraryMapper from "../../infraestructure/LibraryMapper";
import GetBooksUseCase from "./GetBooksUseCase";

export default function GetBooksController() {
  const { execute } = GetBooksUseCase();

  const booksData = execute();

  return {
    books: LibraryMapper.toDomain(booksData).books,
  };
}
