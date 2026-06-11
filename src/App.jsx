import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Blog from "./pages/Blog";
import Todo from "./components/Todo";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <div className="min-h-screen bg-slate-100 p-6">
        <Todo />
      </div>
      <Footer />
    </>
  );
}

export default App;
