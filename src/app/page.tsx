import BookList from "./bookList/page";

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="p-8 text-[3rem]">Reading Book List</h1>
      <div className="px-24">
        <BookList books={data} />
      </div>
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
