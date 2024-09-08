import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Register from "./components/Register";
import Login from "./components/Login";
import data from "./data";
import ListingDetail from "./components/ListingDetails";
import Favorites from "./components/Favorites";
import CardsContainer from "./components/CardsContainer";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        
        if (storedUserData && storedIsLoggedIn) {
            setUserData(storedUserData);
            setIsLoggedIn(true);
        }
    }, []);

    const handleRegister = (formData) => {
        setUserData(formData);
        localStorage.setItem("userData", JSON.stringify(formData)); 
        localStorage.setItem("isLoggedIn", "true"); 
    };

    const handleLogin = (storedData) => {
        setUserData(storedData);
        setIsLoggedIn(true);
        localStorage.setItem('userData', JSON.stringify(storedData));
        localStorage.setItem('isLoggedIn', 'true');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserData(null);
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <Router>
            <div>
                <Navbar isLoggedIn={isLoggedIn} userData={userData} onLogout={handleLogout} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <CardsContainer items={data} />
                            </>
                        }
                    />
                    <Route path="/register" element={<Register onRegister={handleRegister} />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/listings/:id" element={<ListingDetail isLoggedIn={isLoggedIn} userData={userData} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
