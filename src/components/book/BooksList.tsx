import { Book } from "@/app/api/books/model/book";
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
  const { filteredBooks, setSearchQuery } = useBook({ books });

  return (
    <div className="h-full">
      <div className="flex flex-col flex-1 ">
        {title && (
          <h2 className="text-2xl py-4" aria-label={title}>
            {title}
          </h2>
        )}
        <SearchBook setSearchQuery={setSearchQuery} />
        <ul
          className="grid grid-cols-3 gap-4 items-center justify-center py-10"
          aria-label="Books list"
        >
          {filteredBooks.map((book) => (
            <li
              key={book.ISBN}
              className="w-[10rem] hover:border-[1px] cursor-pointer"
              aria-label="Book"
            >
              <BookImage book={book} onClick={onClick} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
