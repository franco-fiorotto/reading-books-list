import { NextResponse } from "next/server";
import GetBooksController from "./application/getBooksUseCase/GetBooksController";

export async function GET() {
  const { books } = GetBooksController();

  return NextResponse.json(books);
}
