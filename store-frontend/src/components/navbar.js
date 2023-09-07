const Navbar = () => {
    return (
      <header className="p-4">
        <div className="flex h-16 mx-auto justify-around md:space-x-8 bg-slate-300">
          <ul className="flex">
            <li className="flex hover:text-white">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex items-center px-4 -mb-1 hover:border-b-2"
              >
                Home
              </a>
            </li>
            <li className="flex hover:text-white">
              <a
                rel="noopener noreferrer"
                href="/add"
                className="flex items-center px-4 -mb-1 hover:border-b-2"
              >
                Add Product
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  };
  
  export default Navbar;
  