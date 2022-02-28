import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
library.add(faMagnifyingGlass);

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-container">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
