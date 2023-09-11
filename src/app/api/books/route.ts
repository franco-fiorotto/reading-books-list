import { NextResponse } from "next/server";
import { mockedData } from "./mockedBooksList";
import { Book, Library } from "@/model/model";

export async function GET() {
  const data = { ...mockedData };

  const books: Book[] = data.library.map((book) => book.book);

  return NextResponse.json(books);
}
