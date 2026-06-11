function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <img src={post.image} alt={post.title} />

      <div className="blog-content">
        <h2>{post.title}</h2>

        <p className="meta">
          {post.author} • {post.date}
        </p>

        <p>{post.excerpt}</p>

        <button>Read More</button>
      </div>
    </article>
  );
}

export default BlogCard;
