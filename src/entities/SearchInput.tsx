"use client";

import React from "react";
import SearchIcon from "../icons/qidiruv.svg";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchInput: React.FC<Props> = ({ search, setSearch }) => {
  return (
    <div className="flex items-center border rounded px-3 py-2 w-full max-w-sm bg-white">
      <input
        type="text"
        className="flex-1 outline-none text-sm sm:text-base px-2"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <img
        src={SearchIcon}
        alt="Search"
        className="ml-2 w-5 h-5 sm:w-6 sm:h-6 opacity-70"
      />
    </div>
  );
};

export default SearchInput;
