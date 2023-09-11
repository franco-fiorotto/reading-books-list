export default function SearchBook({
  setSearchQuery,
}: {
  setSearchQuery: (query: string) => void;
}) {
  const onChangeSearchBook = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search book"
      className="border-2 rounded border-gray-500 px-6 py-2 w-[20rem]"
      onChange={onChangeSearchBook}
    />
  );
}
