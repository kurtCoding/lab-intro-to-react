import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts.jsx";
import NavBar from "./Components/NavBar.jsx";
import Posts from "./Components/Posts.jsx"
import UserProfile from "./Components/UserProfile.jsx";

function App() {

  return (
    <>
      <NavBar/>

      <UserProfile/>

      <Posts/>

      <Contacts/>
    </>
  )}

export default App;
