import { Book } from "@/model/model";
import { useCallback, useState } from "react";

export default function useBook({ books }: { books: Book[] }): {
  savedBooks: Book[];
  availableBooks: Book[];
  saveBook: (book: Book) => void;
  removeBook: (book: Book) => void;
  filteredBooks: Book[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
} {
  const [savedBooks, setSavedBooks] = useState<Book[]>(
    JSON.parse(window.localStorage.getItem("books") || "[]")
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const saveBook = (book: Book) => {
    if (savedBooks.find((b) => b.ISBN === book.ISBN)) {
      return;
    }
    const newBooks = [...savedBooks, book];
    saveBooks(newBooks);
  };

  const removeBook = (book: Book) => {
    const newBooks = savedBooks.filter((b) => b.ISBN !== book.ISBN);
    saveBooks(newBooks);
  };

  const saveBooks = (books: Book[]) => {
    setSavedBooks(books);
    window.localStorage.setItem("books", JSON.stringify(books));
  };

  const getFilteredBooks = useCallback(() => {
    const filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filteredBooks;
  }, [books, searchQuery]);

  const getAvailableBooks = useCallback(() => {
    const availableBooks = books.filter(
      (book) => !savedBooks.find((b) => b.ISBN === book.ISBN)
    );
    return availableBooks;
  }, [books, savedBooks]);

  return {
    savedBooks,
    availableBooks: getAvailableBooks(),
    filteredBooks: getFilteredBooks(),
    searchQuery,
    saveBook,
    removeBook,
    setSearchQuery,
  };
}
