import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import ToDoApp from './Pages/ToDoApp'
import Home from './Pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
          <Route path="todoapp" element={<ToDoApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
