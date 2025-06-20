import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

function SearchBar() {
  const [valueSearch, setValueSearch] = useState("");
  return (
    <div className="flex items-center justify-between border border-gray-400 rounded-md text-black">
      <input
        className="w-full outline-0 p-2 md:p-4 "
        type="text"
        placeholder="Search for product"
        onChange={(e) => setValueSearch(e.target.value)}
      />
      <Link
        href={`/detail/${valueSearch}`}
        className="border-l border-gray-400 py-2 px-2 md:py-4 md:px-8 cursor-pointer hover:bg-gray-200"
      >
        <FontAwesomeIcon className="size-7 text-lg" icon={faMagnifyingGlass} />
      </Link>
    </div>
  );
}

export default SearchBar;
