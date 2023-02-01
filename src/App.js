import "./styles/app.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import FilterPost from "./components/FilterPost";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

import SinglePost from "./pages/SinglePost";
// import PostCard from "./components/PostCard";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [currentUserState, setCurrentUserState] = useState(localStorage.getItem("user"));
  const [filterValue, setFilterValue] = useState("All");

  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.reload();
    });
  };

  const filterValueSelected = (filter) => {
    setFilterValue(filter);
  }

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setCurrentUserState(currentUser);
    });
  }, []);

  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <FilterPost filterValueSelected={filterValueSelected} />
      </nav>

      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} filterValue={filterValue} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/post/:id" element={<SinglePost />} />
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
