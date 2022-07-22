import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";



function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' component={Home} exact/>
            <Route path='/signin' component={SigninPage} exact/>
        </Routes>
        <Home/>
    </Router>
  );
}

export default App;
