import SearchIcon from "../icons/searchIcon";

const SearchBar = ({searchFtn}) => (
    <div className="container max-w-md flex h-16 mx-auto justify-around bg-slate-300">
      <div className="flex items-center">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchIcon />
          </span>
          <input
            type="search"
            name="Search"
            placeholder="name, category..."
            className="py-2 w-32 pl-10 text-sm rounded-md sm:w-96 focus:outline-none"
            onChange={searchFtn}
          />
        </div>
      </div>
    </div>
  );

export default SearchBar;
