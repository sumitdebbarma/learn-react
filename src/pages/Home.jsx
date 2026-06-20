function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 text-5xl font-bold md:text-7xl">
          Welcome to <span className="text-blue-500">Diary</span>
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
          Capture your thoughts, organize your tasks, and keep track of your
          daily journey in one beautiful place.
        </p>

        <div className="flex gap-4">
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-lg border border-gray-600 px-6 py-3 font-medium transition hover:bg-gray-800">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
