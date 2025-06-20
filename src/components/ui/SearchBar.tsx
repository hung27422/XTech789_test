import { createSearchUrl } from "@/controller/searchController";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

function SearchBar() {
  const [valueSearch, setValueSearch] = useState("");
  const searchUrl = createSearchUrl(valueSearch);
  return (
    <div className="flex items-center justify-between border border-gray-400 rounded-md text-black">
      <input
        className="w-full outline-0 p-2 md:p-4 "
        type="text"
        placeholder="Search for product"
        onChange={(e) => setValueSearch(e.target.value)}
      />
      <Link
        href={searchUrl}
        className={`border-l border-gray-400 py-2 px-4 md:py-4 md:px-8 hover:bg-gray-200 ${
          valueSearch.trim() === "" && "pointer-events-none opacity-50"
        }`}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg" />
      </Link>
    </div>
  );
}

export default SearchBar;
