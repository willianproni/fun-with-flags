import Image from "next/image";

type SearchProps = {
  set: (value: string) => void;
};

export const Search = ({ set }: SearchProps) => {
  return (
    <div className="w-full md:w-1/3 mb-2">
      <div className="relative">
        <input
          type="search"
          id="search"
          className="border border-gray-300 px-4 py-2 rounded-xl shadow-sm w-full text-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Search by country..."
          alt="input search flags"
          onChange={(event) => set(event.target.value)}
        />
        <span className="absolute inset-y-0 right-4 flex items-center">
          <Image
            src={"/search.svg"}
            alt="section icon"
            width={24}
            height={24}
          />
        </span>
      </div>
    </div>
  );
};

export default Search;
