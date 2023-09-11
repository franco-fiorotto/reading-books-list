import BookList from "./bookList/page";

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full">
      <h1 className="p-8 text-[3rem]">Reading Book List</h1>
      <BookList books={data} />
    </main>
  );
}

async function getData() {
  const res = await fetch("http://localhost:3000/api/books", {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  console.log("pasa");

  return res.json();
}
