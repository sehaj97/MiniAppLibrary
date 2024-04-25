import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import NavigationHeader from "./Components/NavigationHeader";

import ToDoApp from "./Pages/ToDoApp";
import Home from "./Pages/Home";
import CounterApp from "./Pages/CounterApp";
import ToggleTheme from './Pages/ToggleTheme';
import FlagsApp from "./Pages/FlagsApp";
import ErrorPage from "./Pages/ErrorPage";
import ReusableComponents from "./Pages/ReusableComponents";
import Imagepicker from "./Pages/Imagepicker";
import Palindromechecker from "./Pages/Palindromechecker";
import DiceGame from "./Pages/DiceGame";
import ImageSlider from "./Pages/ImageSlider";
import ToDoAppV2 from "./Pages/TodoAppV2";

function App() {
  return (
    <BrowserRouter>
      {/* Include NavigationHeader component here */}
      <NavigationHeader />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="todoapp" element={<ToDoApp />} />
        <Route path="counterapp" element={<CounterApp />} />
        <Route path="themeapp" element={<ToggleTheme />} />
        <Route path="flagsapp" element={<FlagsApp />} />
        <Route path="reuse" element={<ReusableComponents />} />
        <Route path="imagepicker" element={<Imagepicker />} />
        <Route path="palindrome" element={<Palindromechecker />} />
        <Route path="dicegame" element={<DiceGame />} />
        <Route path="imageslider" element={<ImageSlider />} />
        <Route path="todoappv2" element={<ToDoAppV2 />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
