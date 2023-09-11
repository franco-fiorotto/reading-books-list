import Image from "next/image";
import { Book } from "@/model/model";

export default function BookImage({
  book,
  onClick,
}: {
  book: Book;
  onClick: (book: Book) => void;
}) {
  return (
    <li className="w-[10rem] hover:border-[1px] cursor-pointer">
      <Image
        alt={book.title}
        src={book.cover}
        width={350}
        height={350}
        aria-label="Book cover"
        title={`${book.title} by ${book.author.name}`}
        className="object-cover"
        onClick={() => onClick(book)}
      />
    </li>
  );
}
