import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Blog from "./pages/Blog";
import TodoFeature from "./pages/TodoFeature";
import "./App.css";
import Search from "./pages/Search";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/feature" element={<TodoFeature />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
