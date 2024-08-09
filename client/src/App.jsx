import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import Signup from "./Signup";
import Login from "./Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
