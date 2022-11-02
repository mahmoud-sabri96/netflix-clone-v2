import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userRedux/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import MovieScreen from "./screens/MovieScreen";

function App() {
  // const user = null;
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Is logged in
        dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
        // console.log(userAuth);
      } else {
        //Is logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/netflix-clone-v2" element={<HomeScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/:type/:ID" element={<MovieScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
