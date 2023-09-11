import { Book } from "@/model/model";
import { useCallback, useState } from "react";

export default function useBook({ books }: { books: Book[] }) {
  const [savedBooks, setSavedBooks] = useState<Book[]>(
    JSON.parse(window.localStorage.getItem("books") || "[]")
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const saveBook = (book: Book) => {
    if (savedBooks.find((b) => b.ISBN === book.ISBN)) {
      return;
    }
    const newBooks = [...savedBooks, book];
    setSavedBooks(newBooks);
    window.localStorage.setItem("books", JSON.stringify(newBooks));
  };

  const removeBook = (book: Book) => {
    const newBooks = savedBooks.filter((b) => b.ISBN !== book.ISBN);
    setSavedBooks(newBooks);
    window.localStorage.setItem("books", JSON.stringify(newBooks));
  };

  const getFilteredBooks = useCallback(() => {
    const filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filteredBooks;
  }, [books, searchQuery]);

  return {
    savedBooks,
    saveBook,
    removeBook,
    filteredBooks: getFilteredBooks(),
    searchQuery,
    setSearchQuery,
  };
}
