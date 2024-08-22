import React from 'react';
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Contact from './components/Contact';
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
     <>
      <div className=" dark:bg-slate-900 dark:text-white">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/course" element={<Courses />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/signup" element={<Signup />} />

    </Routes>
    </div>
</>
);

}

export default App;
