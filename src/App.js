import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [currentUserState, setCurrentUserState] = useState(localStorage.getItem("user"));

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
        <Link to="/"> Home </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>

      <footer>
        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createpost"> Create Post </Link>
            <p>{currentUserState.email}</p>
            <button className="logoutBtn" onClick={logOut}> LogOut </button>
          </>
        )}
      </footer>
    </Router>
  );
}

export default App;
