
import React from 'react';
import "./App.css";
import Home from "./pages/Home.jsx";
import Main from "./components/Main/Main";
import Reviews from "./components/Reviews/Reviews.js";
import About from "./components/About/About.js";
import NotFound from "./components/NotFound/NotFound.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
import Footer from "./components/Footer/Footer.js";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App container">
      <Home />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<PrivateRoute>
          <About />
        </PrivateRoute>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
