import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <Router>
      <Navbar theme={theme} setTheme={setTheme} />
      <div>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/quiz" element={<Quiz theme={theme} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
