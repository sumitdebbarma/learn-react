function Blog() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      description:
        "Learn the fundamentals of React and build modern user interfaces.",
      date: "June 21, 2026",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      description:
        "Create beautiful and responsive designs quickly using Tailwind CSS.",
      date: "June 20, 2026",
    },
    {
      id: 3,
      title: "Understanding Hooks",
      description:
        "A practical guide to useState, useEffect, and custom hooks.",
      date: "June 18, 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold">Blog</h1>
          <p className="mt-4 text-lg text-gray-400">
            Thoughts, tutorials, and insights from our journey.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12 rounded-2xl bg-slate-900 p-8 shadow-lg">
          <p className="mb-2 text-sm uppercase tracking-wide text-blue-400">
            Featured Post
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Building Modern Web Applications
          </h2>

          <p className="mb-6 text-gray-300">
            Discover best practices, tools, and techniques for creating fast,
            scalable, and user-friendly web applications.
          </p>

          <button className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700">
            Read More
          </button>
        </div>

        {/* Blog Posts */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="rounded-xl bg-slate-900 p-6 transition hover:-translate-y-1 hover:bg-slate-800"
            >
              <p className="mb-2 text-sm text-gray-400">{post.date}</p>

              <h3 className="mb-3 text-xl font-semibold">{post.title}</h3>

              <p className="mb-4 text-gray-300">{post.description}</p>

              <button className="text-blue-400 hover:text-blue-300">
                Read Article →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
