import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Home.page";
import RqSuperHeroesPage from "./pages/RQSuperHeroes.page";
import SuperHeroesPage from "./pages/SuperHeroes.page";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RqSuperHeroesPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
