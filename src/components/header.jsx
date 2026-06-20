import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" fixed w-full bg-black text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold tracking-wide">Diary.com</h1>

        <nav className="flex gap-6">
          <Link to="/" className="text-gray-300 transition hover:text-white">
            Home
          </Link>

          <Link
            to="/blog"
            className="text-gray-300 transition hover:text-white"
          >
            Blog
          </Link>
          <Link
            to="/feature"
            className="text-gray-300 transition hover:text-white"
          >
            Todo
          </Link>
          <Link
            to="/search"
            className="text-gray-300 transition hover:text-white"
          >
            Search
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
