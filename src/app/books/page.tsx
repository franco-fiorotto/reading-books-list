"use client";
import BooksList from "@/components/book/BooksList";
import useBook from "@/hooks/useBook";
import { Book } from "@/model/model";

export default function Books({ books }: { books: Book[] }) {
  const { savedBooks, saveBook, removeBook } = useBook({ books });

  const onClickBookToSaveBook = (book: Book) => {
    saveBook(book);
  };

  const onClickOnSavedBook = (book: Book) => {
    removeBook(book);
  };

  return (
    <div
      className={`grid ${
        !!savedBooks.length ? "grid-cols-2" : "grid-cols-1"
      } gap-20  `}
    >
      <BooksList
        books={books}
        title="Books to read"
        onClick={onClickBookToSaveBook}
      />
      {!!savedBooks.length && (
        <BooksList
          books={savedBooks}
          title="Saved books"
          onClick={onClickOnSavedBook}
        />
      )}
    </div>
  );
}
