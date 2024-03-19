import React, { useContext, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { DATA_CONTEXT } from "../../provider/DataProvider";
const SearchBar = () => {
  const { musicData } = useContext(DATA_CONTEXT);
  const { handleSearch } = musicData;
  const [focus, setOnfocus] = useState(false);
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
        className="input input-bordered w-full max-w-xs border-[#E07000] border-2 focus:outline-none focus:border-[#E07000] "
        onFocus={() => setOnfocus(true)}
        onBlur={() => setOnfocus(false)}
      />

      <div
        className={`absolute right-3 top-[25%] text-2xl text-[#E07000] ${
          !focus ? " opacity-100" : "opacity-0"
        } duration-300`}
      >
        <IoSearchOutline />
      </div>
    </div>
  );
};

export default SearchBar;
