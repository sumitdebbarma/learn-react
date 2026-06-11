import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wide">Tech Blog</h1>

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
        </nav>
      </div>
    </header>
  );
}

export default Header;
