import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './layout/Footer';
import NavBar from './layout/NavBar';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
