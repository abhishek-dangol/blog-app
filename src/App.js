import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { selectSignedIn } from "./features/userSlice";
import "./styling/app.css";
import { useSelector } from "react-redux";
import Blogs from "./components/Blogs.js";

const App = () => {
  document.title = "Dan's Blogs";
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />}
    </div>
  );
};

export default App;
