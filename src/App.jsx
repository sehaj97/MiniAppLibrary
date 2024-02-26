import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import ToDoApp from './Pages/ToDoApp'
import Home from './Pages/Home'
import CounterApp from "./Pages/CounterApp";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
          <Route path="todoapp" element={<ToDoApp />} />
          <Route path="counterapp" element={<CounterApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
