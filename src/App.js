import "./styles/app.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import SinglePost from "./pages/SinglePost";
import About from "./pages/About";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [currentUserState, setCurrentUserState] = useState(
    localStorage.getItem("user")
  );
  const today = new Date();

  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.reload();
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setCurrentUserState(currentUser);
    });
  }, []);

  return (
    <Router>
      <nav>
        <Link to="/"> &#10000; &#128195; </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/post/:id" element={<SinglePost isAuth={isAuth} />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createpost"> Create Post </Link>
            <button className="logoutBtn" onClick={logOut}>
              Log out
            </button>
            <p>Logged in as : {currentUserState.email}</p>
          </>
        )}
        <span> Copyright &copy; {today.getFullYear()} </span>
      </footer>
    </Router>
  );
}

export default App;
