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
import { useState } from "react";
import Cookies from "js-cookie";
import MyCollection from "./pages/MyCollection";
import Game from "./pages/Game";
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
  const [token, setToken] = useState(Cookies.get("token") || "");
  const [userName, setUserName] = useState(Cookies.get("name") || "");
  const [userPicture, setUserPicture] = useState(Cookies.get("picture") || "");

  return (
    <Router>
      <div className="app">
        <div className="app-container">
          <Header token={token} userName={userName} userPicture={userPicture} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <Login
                  setToken={setToken}
                  setUserName={setUserName}
                  setUserPicture={setUserPicture}
                />
              }
            ></Route>
            <Route
              path="/signup"
              element={
                <SignUp
                  setToken={setToken}
                  setUserName={setUserName}
                  setUserPicture={setUserPicture}
                />
              }
            ></Route>
            <Route path="/game/:id" element={<Game />} />
            <Route path="/myCollection" element={<MyCollection />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
