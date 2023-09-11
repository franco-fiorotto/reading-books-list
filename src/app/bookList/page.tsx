"use client";
import { Book } from "@/model/model";

import Image from "next/image";
import { useState } from "react";

export default function BookList({ books }: { books: Book[] }) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [savedBooks, setSavedBooks] = useState<Book[]>(
    JSON.parse(window.localStorage.getItem("books") || "[]")
  );

  const onChangeSearchBook = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const onClickBookToSaveBook = (book: Book) => {
    // add book to local storage while keeping the previous list of books
    if (savedBooks.find((b) => b.ISBN === book.ISBN)) {
      return;
    }

    window.localStorage.setItem("books", JSON.stringify([...savedBooks, book]));
    setSavedBooks((sb) => [...sb, book]);
  };

  const onClickOnSavedBook = (book: Book) => {
    // remove book from local storage while keeping the previous list of books
    window.localStorage.setItem(
      "books",
      JSON.stringify(savedBooks.filter((b) => b.ISBN !== book.ISBN))
    );
    setSavedBooks((sb) => sb.filter((b) => b.ISBN !== book.ISBN));
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <input
        type="text"
        placeholder="Search book"
        className="border-2 rounded border-gray-500 px-6 py-2 w-[20rem]"
        onChange={onChangeSearchBook}
      />
      <ul className="flex flex-wrap gap-6 items-center justify-center py-10">
        {filteredBooks.map((book) => (
          <li
            key={book.ISBN}
            className="w-[10rem] hover:border-[1px] cursor-pointer"
            onClick={() => onClickBookToSaveBook(book)}
          >
            <Image
              alt={book.title}
              src={book.cover}
              width={350}
              height={350}
              aria-label="Book cover"
              title={`${book.title} by ${book.author.name}`}
              className="object-cover "
            />
          </li>
        ))}
      </ul>
      {savedBooks.length > 0 && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl">Saved books</h2>
          <ul className="flex flex-wrap gap-6 items-center justify-center py-10">
            {savedBooks.map((book) => (
              <li
                key={book.ISBN}
                className="w-[10rem] hover:border-[1px] cursor-pointer"
              >
                <Image
                  alt={book.title}
                  src={book.cover}
                  width={350}
                  height={350}
                  aria-label="Book cover"
                  title={`${book.title} by ${book.author.name}`}
                  className="object-cover"
                  onClick={() => onClickOnSavedBook(book)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
