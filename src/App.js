import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Account } from "./components/Account";
import Home from "./pages/Home";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Platform from "./pages/Platform";
import Genres from "./pages/Genres";
import Input from "./pages/Input";
import Game from "./pages/Game";

function App() {
  return (
    <Account>
      {/* <Status /> */}

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forms/platform" element={<Platform />} />
          <Route path="/forms/genres" element={<Genres />} />
          <Route path="/forms/input" element={<Input />} />
          <Route path="/games/:gameId" element={<Game />} />
        </Routes>
      </Router>
    </Account>
  );
}

export default App;
