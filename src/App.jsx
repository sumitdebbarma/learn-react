import Header from "./components/header";
import BlogCard from "./components/BlogCard";
import Footer from "./components/Footer";

import posts from "../data";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <section className="posts">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default App;
