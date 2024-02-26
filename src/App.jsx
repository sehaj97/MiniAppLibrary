import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ToDoApp from "./Pages/ToDoApp";
import Home from "./Pages/Home";
import CounterApp from "./Pages/CounterApp";
import NavigationHeader from "./Components/NavigationHeader"; // Import NavigationHeader component

function App() {
  return (
    <BrowserRouter>
      {/* Include NavigationHeader component here */}
      <NavigationHeader />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="todoapp" element={<ToDoApp />} />
        <Route path="counterapp" element={<CounterApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
