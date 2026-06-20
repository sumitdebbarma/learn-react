function Search() {
  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <div className="mx-auto max-w-xl">
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search articles..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 text-white placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
