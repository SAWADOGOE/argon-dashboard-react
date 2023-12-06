import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../../../src/public/App.css'
import Home from "../../../src/public/Pages/Home";
import Legal from "../../../src/public/Pages/Legal";
import NotFound from "../../../src/public/Pages/NotFound";
import Appointment from "../../../src/public/Pages/Appointment";


const Index = () => {
    return (
        <div className="App">
            <Router basename="/Health-Plus">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/legal" element={<Legal />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
};

export default Index;