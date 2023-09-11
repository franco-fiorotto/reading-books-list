import { Book } from "@/model/model";
import BookImage from "./BookImage";
import useBook from "@/hooks/useBook";
import SearchBook from "../searchBook/SearchBook";

export default function BooksList({
  books,
  title,
  onClick,
}: {
  books: Book[];
  title?: string;
  onClick: (book: Book) => void;
}) {
  const { savedBooks, saveBook, removeBook, filteredBooks, setSearchQuery } =
    useBook({ books });

  return (
    <div className="h-full">
      <div className="flex flex-col flex-1 ">
        {title && (
          <>
            <h2 className="text-2xl py-4">{title}</h2>
          </>
        )}
        <SearchBook setSearchQuery={setSearchQuery} />
        <ul className="grid grid-cols-3 gap-4 items-center justify-center py-10">
          {filteredBooks.map((book) => (
            <BookImage key={book.ISBN} book={book} onClick={onClick} />
          ))}
        </ul>
      </div>
    </div>
  );
}
