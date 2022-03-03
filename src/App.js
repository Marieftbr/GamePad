import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import {
  faMagnifyingGlass,
  faAngleRight,
  faAngleLeft,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faBookmark,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
library.add(
  faMagnifyingGlass,
  faAngleRight,
  faAngleLeft,
  faUser,
  faBookmark,
  faMessage,
  faArrowUpFromBracket
);

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-container">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
