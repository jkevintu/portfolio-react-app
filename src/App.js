import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
// import logo from './logo.svg';
// import './App.css';



function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
}

export default App;
